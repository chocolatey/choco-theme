import { c4bStandardSubscription, c4bPremiumSubscription, c4bIncludedItems, c4bSupportNodes, c4bAddOnPrice, c4bNodeDefaults, c4bNodePurchaseCutoffs } from '@choco-core/ts/util/pricing-calculator';
import noUiSlider from 'nouislider';

window.addEventListener('DOMContentLoaded', () => {
    const c4bSlider = document.getElementById('c4bSlider');

    if (c4bSlider) {
        const c4bSliderInput = document.getElementById('c4bSliderInput');
        const c4bPackaging = document.getElementById('c4bPackaging');
        const c4bAddOns = document.querySelectorAll('.c4b-add-ons');
        const c4bSupportTypes = document.querySelectorAll('input[name="c4b-support-type"]');
        const c4bCommunitySupport = document.getElementById('c4bCommunitySupport');
        const c4bStandardSupport = document.getElementById('c4bStandardSupport');
        const c4bPremiumSupport = document.getElementById('c4bPremiumSupport');
        let c4bPreviousNodes = 500; // Default to 500 nodes on load
        let c4bSliderInputSourceIsKey = false; // Keep track of whether the c4bSliderInput was changed by the keyboard or the mouse
        let c4bSliderInputSourceLastKey = ''; // Keep track of the last key pressed on the c4bSliderInput
        const c4bPurchaseNowBtn = document.querySelector('#c4bPurchaseNowBtn');
        const c4bSupportTypesContainer = document.querySelector('#c4bSupportTypesContainer');

        // Initialize c4bSlider
        noUiSlider.create(c4bSlider, {
            connect: 'lower',
            start: [c4bNodeDefaults.defaultNodes],
            tooltips: true,
            range: {
                min: [c4bNodeDefaults.minNodes],
                '50%': [2000],
                max: [c4bNodeDefaults.maxNodes]
            },
            // eslint-disable-next-line object-shorthand
            format: {
                to: function (value) {
                    // Must return a string
                    return value.toFixed(0).toString();
                },
                from: function (value) {
                    // Must return a number
                    return +value;
                }
            }
        });

        const calculatePriceAndAddOns = c4bSliderNumberOfNodes => {
            let c4bCalculatedPrice = 0;
            let c4bStandardSupportCalculatedPrice = 0;
            let c4bPackagingCalculatedPrice = 0;

            // Find Standard Support Add-On Price
            if (c4bSliderNumberOfNodes < c4bSupportNodes[0].standard && c4bStandardSupport.checked) {
                c4bStandardSupportCalculatedPrice = c4bAddOnPrice[0].standardSupport;
            }

            // Find Custom Packaging Add-On Price
            if (+c4bPackaging.value !== 0) {
                c4bPackagingCalculatedPrice = +c4bPackaging.value * c4bAddOnPrice[0].packaging;
            }

            // Premium Support
            if (c4bPremiumSupport.checked) {
                for (const level of c4bPremiumSubscription) {
                    if (c4bSliderNumberOfNodes >= level.minNodes && c4bSliderNumberOfNodes <= level.maxNodes) {
                        c4bCalculatedPrice = level.pricePerNode * c4bSliderNumberOfNodes;
                    }
                }
            } else {
                // Standard Support
                for (const level of c4bStandardSubscription) {
                    if (c4bSliderNumberOfNodes >= level.minNodes && c4bSliderNumberOfNodes <= level.maxNodes) {
                        if (c4bSliderNumberOfNodes <= c4bSupportNodes[0].community) { // 35
                            c4bCalculatedPrice = level.pricePerNode;
                        } else {
                            c4bCalculatedPrice = level.pricePerNode * c4bSliderNumberOfNodes;
                        }
                    }
                }
            }

            // Add Add-On Prices to Annual Price
            const c4bCalculatedAddOnPrice = c4bStandardSupportCalculatedPrice + c4bPackagingCalculatedPrice;
            c4bCalculatedPrice = c4bCalculatedPrice + c4bCalculatedAddOnPrice;

            // Format price decimal places
            c4bCalculatedPrice = c4bCalculatedPrice.toFixed(2);

            if ((c4bCalculatedPrice * 100) % 100 === 0) {
                c4bCalculatedPrice = Math.floor(c4bCalculatedPrice); // If the first two decimal places are 0, remove the decimal completely
            }

            // Format price with commas
            // Convert the number to a string
            const numberString = c4bCalculatedPrice.toString();

            // Split the string into whole and decimal parts (if any)
            const parts = numberString.split('.');
            const wholePart = parts[0];
            const decimalPart = parts[1] ? `.${parts[1]}` : '';

            // Add commas to the whole part
            const formattedWholePart = wholePart.replace(/\B(?=(\d{3})+(?!\d))/g, ',');

            // Concatenate the formatted whole part and decimal part (if any)
            c4bCalculatedPrice = formattedWholePart + decimalPart;

            // Append price
            const c4bPrice = document.querySelector('#c4bPrice');
            c4bPrice.innerText = `$${c4bCalculatedPrice.toLocaleString()}`;

            // Append checkout link
            if (c4bSliderNumberOfNodes < c4bNodePurchaseCutoffs.minNodes || c4bSliderNumberOfNodes > c4bNodePurchaseCutoffs.maxNodes) {
                // No buy button
                c4bPurchaseNowBtn.href = '#';
            } else {
                // Has buy button
                const c4bPurchaseNowBtnPackaging = c4bPackaging.value > 0 ? `&sku3330984=${c4bPackaging.value}` : '';
                c4bPurchaseNowBtn.href = `https://checkout.bluesnap.com/buynow/checkout?storeid=269004&sku3343184=${c4bSliderNumberOfNodes}${c4bPurchaseNowBtnPackaging}`;
            }

            // Append node counts and price per node text
            const c4bNodeRange = document.querySelector('#c4bNodeRange');
            const c4bPricePerNode = document.querySelector('#c4bPricePerNode');

            // Premium Support
            if (c4bPremiumSupport.checked) {
                for (const level of c4bPremiumSubscription) {
                    if (c4bSliderNumberOfNodes >= level.minNodes && c4bSliderNumberOfNodes <= level.maxNodes) {
                        c4bNodeRange.innerText = `${level.minNodes.toLocaleString()}-${level.maxNodes.toLocaleString()} Nodes`;
                        c4bPricePerNode.innerText = `$${level.pricePerNode.toFixed(2)} Per Node`;
                    }
                }
            } else {
                // Standard Support
                for (const level of c4bStandardSubscription) {
                    if (c4bSliderNumberOfNodes >= level.minNodes && c4bSliderNumberOfNodes <= level.maxNodes) {
                        c4bNodeRange.innerText = `${level.minNodes.toLocaleString()}-${level.maxNodes.toLocaleString()} Nodes`;

                        if (c4bSliderNumberOfNodes <= c4bSupportNodes[0].community) { // 35
                            c4bPricePerNode.innerText = 'Flat fee';
                        } else {
                            c4bPricePerNode.innerText = `$${level.pricePerNode.toFixed(2)} Per Node`;
                        }
                    }
                }
            }

            // Append Add-Ons (Standard Support and Custom Packaging)
            const c4bAddOnContainer = document.getElementById('sliderAddOnContainer');
            if (c4bCalculatedAddOnPrice > 0) {
                const c4bAddOnContainerList = c4bAddOnContainer.querySelector('ul');
                const c4bAddOnItemStandardSupportId = 'c4bAddOnItemStandardSupport';
                const c4bAddOnItemPackagingId = 'c4bAddOnItemPackaging';
                const c4bAddOnItemStandardSupport = c4bAddOnContainerList.querySelector(`#${c4bAddOnItemStandardSupportId}`);
                const c4bAddOnItemPackaging = c4bAddOnContainerList.querySelector(`#${c4bAddOnItemPackagingId}`);

                const addAddOnItem = (addOnPrice, addOnItem, addOnItemId, addOnText) => {
                    if ((addOnPrice > 0 && !addOnItem && addOnItem === c4bAddOnItemStandardSupport) || (addOnPrice > 0 && addOnItem === c4bAddOnItemPackaging)) {
                        if (c4bAddOnItemPackaging) {
                            c4bAddOnItemPackaging.remove();
                        }

                        const addOnTemplate = document.getElementById('sliderAddOnItem');
                        const addOnItem = addOnTemplate.content.cloneNode(true).querySelector('li');

                        addOnItem.innerHTML = addOnText;
                        addOnItem.setAttribute('id', addOnItemId);

                        c4bAddOnContainerList.appendChild(addOnItem);
                    } else if (addOnPrice == 0 && addOnItem) {
                        addOnItem.remove();
                    }
                };

                // Add or remove Standard Support
                addAddOnItem(c4bStandardSupportCalculatedPrice, c4bAddOnItemStandardSupport, c4bAddOnItemStandardSupportId, `Standard Support at $${c4bStandardSupportCalculatedPrice.toLocaleString()}<sub>/year</sub>`);

                // Add or remove Custom Packaging
                const c4bAddOnItemPackagingCredit = +c4bPackaging.value > 1 ? 's' : '';
                addAddOnItem(c4bPackagingCalculatedPrice, c4bAddOnItemPackaging, c4bAddOnItemPackagingId, `${c4bPackaging.value} Custom Packaging credit${c4bAddOnItemPackagingCredit} at $${c4bPackagingCalculatedPrice.toLocaleString()} <span class="text-nowrap">($${c4bAddOnPrice[0].packaging} per credit)</span>`);

                c4bAddOnContainer.classList.remove('d-none');
            } else {
                c4bAddOnContainer.classList.add('d-none');
            }

            // Append Included Items and Included Per Node
            const c4bIncludedSupportType = document.getElementById('c4bIncludedSupportType');
            const c4bIncludedIntroCallAndDemo = document.getElementById('c4bIncludedIntroCallAndDemo');
            const c4bIncludedCasesPerMonth = document.getElementById('c4bIncludedCasesPerMonth');
            const c4bIncludedTechnicalContacts = document.getElementById('c4bIncludedTechnicalContacts');
            const c4bIncludedNodeRange = document.getElementById('c4bIncludedNodeRange');
            const c4bIncludedSupport24x7 = document.getElementById('c4bIncludedSupport24x7');
            const c4bIncludedResponseTimes = document.getElementById('c4bIncludedResponseTimes');
            const c4bIncludedResponseTimesP1 = document.getElementById('c4bIncludedResponseTimesP1');
            const c4bIncludedResponseTimesP2 = document.getElementById('c4bIncludedResponseTimesP2');
            const c4bIncludedResponseTimesP3 = document.getElementById('c4bIncludedResponseTimesP3');
            const c4bIncludedResponseTimesHours = c4bPremiumSupport.checked ? 'Hours' : 'Business Hours';
            const c4bIncludedResponseTimesNone = 'No Commercial Support';

            for (let level of c4bIncludedItems) {
                const appendIncludedItems = () => {
                    if (c4bSliderNumberOfNodes >= level.minNodes && c4bSliderNumberOfNodes <= level.maxNodes) {
                        const c4bIncludedTechnicalContactsPlural = level.technicalContacts > 1 ? 's' : '';
                        const c4bIncludedTechnicalContactsNegotiable = level.technicalContacts > 1 ? ' (Negotiable) ' : ' ';

                        const showHideIncludedItems = (item, levelItem) => {
                            if (levelItem) {
                                item.classList.remove('d-none');
                            } else {
                                item.classList.add('d-none');
                            }
                        };

                        showHideIncludedItems(c4bIncludedIntroCallAndDemo, level.introCallAndDemo);
                        showHideIncludedItems(c4bIncludedSupport24x7, level.support24x7);
                        showHideIncludedItems(c4bIncludedCasesPerMonth.parentNode, level.casesPerMonth);
                        showHideIncludedItems(c4bIncludedTechnicalContacts, level.technicalContacts);
                        showHideIncludedItems(c4bIncludedResponseTimes, level.responseTimes);

                        if (level.standardSupport) {
                            if (c4bPremiumSupport.checked) {
                                c4bIncludedSupportType.innerText = 'Premium Support';
                            } else {
                                c4bIncludedSupportType.innerText = 'Standard Support';
                            }
                        } else {
                            c4bIncludedSupportType.innerHTML = 'Community Support - No commercial support. <a href="https://ch0.co/community" target="_blank" rel="noreferrer">Join our Discord</a> and <a href="https://www.reddit.com/r/chocolatey/" target="_blank" rel="noreferrer">official Reddit </a>to chat with the Community.';
                        }

                        if (level.responseTimes) {
                            c4bIncludedResponseTimesP1.innerText = `${level.responseTimes.p1} ${c4bIncludedResponseTimesHours}`;
                            c4bIncludedResponseTimesP2.innerText = `${level.responseTimes.p2} ${c4bIncludedResponseTimesHours}`;
                            c4bIncludedResponseTimesP3.innerText = `${level.responseTimes.p3} ${c4bIncludedResponseTimesHours}`;
                        } else {
                            c4bIncludedResponseTimesP1.innerText = c4bIncludedResponseTimesNone;
                            c4bIncludedResponseTimesP2.innerText = c4bIncludedResponseTimesNone;
                            c4bIncludedResponseTimesP3.innerText = c4bIncludedResponseTimesNone;
                        }

                        c4bIncludedTechnicalContacts.innerText = `${level.technicalContacts}${c4bIncludedTechnicalContactsNegotiable}Technical Contact${c4bIncludedTechnicalContactsPlural}`;
                        c4bIncludedCasesPerMonth.innerText = level.casesPerMonth;
                        c4bIncludedNodeRange.innerText = `${level.minNodes.toLocaleString()}-${level.maxNodes.toLocaleString()} Nodes`;
                    }
                };

                // Determine which range of nodes to show included items for
                if (level.premiumSupportOptional === true) {
                    // Use 1,500 - 50,000 node range
                    if (c4bPremiumSupport.checked) {
                        // Use 1,500 - 50,000 node range
                        level = c4bIncludedItems[3];
                        appendIncludedItems();
                    } else {
                        // Use 300 - 50,000 node range
                        level = c4bIncludedItems[2];
                        appendIncludedItems();
                    }
                } else {
                    // Node count not eligible for Premium Support
                    appendIncludedItems();
                }
            }
        };

        // Keep track of whether the c4bSliderInput was changed by the keyboard and store the last pressed key
        c4bSliderInput.addEventListener('keydown', event => {
            // User typed using the keyboard
            c4bSliderInputSourceIsKey = true;
            c4bSliderInputSourceLastKey = event.key;
        });

        // Update value on c4bSlider when manual input changes
        c4bSliderInput.addEventListener('change', () => {
            // Prevent prohibited values 36-39 and determine if user was going up or down in value in order to set the c4bSlider to the correct value
            if (+c4bSliderInput.value > c4bStandardSubscription[0].maxNodes && +c4bSliderInput.value < c4bStandardSubscription[1].minNodes) {
                if ((c4bSliderInputSourceIsKey && c4bSliderInputSourceLastKey === 'Enter') || (+c4bSliderInput.value > c4bPreviousNodes)) {
                    // User is trying to increase the value or user pressed enter on a value within this range
                    c4bSlider.noUiSlider.set(c4bStandardSubscription[1].minNodes); // 40
                } else {
                    // User is trying to decrease the value
                    c4bSlider.noUiSlider.set(c4bStandardSubscription[0].maxNodes); // 35
                }
            } else {
                c4bSlider.noUiSlider.set(+c4bSliderInput.value);
            }

            c4bSliderInputSourceIsKey = false; // Reset the source of the change
            c4bSliderInputSourceLastKey = ''; // Reset the last key pressed
        });

        // Update value on slide
        c4bSlider.noUiSlider.on('update', (values, handle) => {
            const c4b50kNodes = document.querySelector('#c4b50kNodes');
            const c4bGetStaredBtn = document.querySelector('#c4bGetStartedBtn');

            // Update value of manual input when c4bSlider changes
            c4bSliderInput.value = values[handle];

            // Prevent prohibited values 36-39 and determine if user was going up or down in value in order to set the c4bSlider to the correct value
            if (values[handle] > c4bStandardSubscription[0].maxNodes && values[handle] < c4bStandardSubscription[1].minNodes) {
                if (values[handle] > c4bPreviousNodes) {
                    // User is trying to increase the value
                    c4bSliderInput.value = c4bStandardSubscription[1].minNodes; // 40
                } else {
                    // User is trying to decrease the value
                    c4bSliderInput.value = c4bStandardSubscription[0].maxNodes; // 35
                }

                c4bSlider.noUiSlider.set(+c4bSliderInput.value);
                return; // Need to return here to prevent the rest of the function from running since we are setting the c4bSlider value above and this will recall the function with the correct values (not 36-39)
            }

            // Update the previous value
            c4bPreviousNodes = values[handle];

            if (values[handle] < c4bSupportNodes[0].standard && !c4bStandardSupport.classList.contains('active')) {
                c4bCommunitySupport.checked = true;
            } else if ((values[handle] >= c4bSupportNodes[0].standard && values[handle] < c4bSupportNodes[0].premium) ||
                (values[handle] < c4bSupportNodes[0].standard && c4bStandardSupport.classList.contains('active')) ||
                (values[handle] >= c4bSupportNodes[0].premium && !c4bPremiumSupport.classList.contains('active'))) {
                c4bStandardSupport.checked = true;
            } else if (values[handle] >= c4bSupportNodes[0].premium && c4bPremiumSupport.classList.contains('active')) {
                c4bPremiumSupport.checked = true;
            }

            // Enable/Disable toggling of support type
            if (values[handle] >= c4bSupportNodes[0].standard) {
                c4bCommunitySupport.disabled = true;
            } else {
                c4bCommunitySupport.disabled = false;
            }

            if (values[handle] >= c4bSupportNodes[0].premium) {
                c4bPremiumSupport.disabled = false;
            } else {
                c4bPremiumSupport.disabled = true;
            }

            // Show/hide max node message
            if (values[handle] == c4bNodeDefaults.maxNodes) {
                c4b50kNodes.classList.remove('d-none');
            } else {
                c4b50kNodes.classList.add('d-none');
            }

            // Show/hide action buttons and update url
            if (values[handle] < c4bNodePurchaseCutoffs.minNodes || values[handle] > c4bNodePurchaseCutoffs.maxNodes) {
                // No buy button
                c4bGetStaredBtn.classList.remove('btn-outline-success');
                c4bGetStaredBtn.classList.add('btn-success');
                c4bPurchaseNowBtn.classList.add('d-none');
            } else {
                // Has buy button
                c4bGetStaredBtn.classList.add('btn-outline-success');
                c4bGetStaredBtn.classList.remove('btn-success');
                c4bPurchaseNowBtn.classList.remove('d-none');
            }

            calculatePriceAndAddOns(values[handle]);
        });

        // Trigger updating of price and add ons on click
        for (const i of c4bAddOns) {
            i.addEventListener('change', () => {
                calculatePriceAndAddOns(c4bSliderInput.value);
            });
        }

        // Keep track of last manually selected support type
        for (const i of c4bSupportTypes) {
            i.addEventListener('click', () => {
                for (const el of c4bSupportTypes) {
                    el.classList.remove('active');
                }

                i.classList.add('active');
            });
        }

        // Trigger information modal when clicking on a disabled support type option
        c4bSupportTypesContainer.addEventListener('click', event => {
            if (event.target.id === c4bSupportTypesContainer.id) {
                const c4bSupportTypesModal = bootstrap.Modal.getOrCreateInstance(document.querySelector('#c4bModalSupportType'), { backdrop: 'static' });

                c4bSupportTypesModal.show();
            }
        });
    }
});
