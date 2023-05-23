export const c4bNodePurchaseCutoffs = {
    minNodes: 100,
    maxNodes: 1000
};

export const c4bNodeDefaults = {
    minNodes: 1,
    defaultNodes: 500,
    maxNodes: 50000
};

export const c4bAddOnPrice = [
    {
        packaging: 500,
        standardSupport: 1000
    }
];

export const c4bSupportNodes = [
    {
        community: 35,
        standard: 100,
        premium: 1500
    }
];

export const c4bIncludedItems = [
    {
        minNodes: 1,
        maxNodes: 99,
        casesPerMonth: 0,
        technicalContacts: 0,
        premiumSupportOptional: false,
        standardSupport: false,
        introCallAndDemo: false,
        structuredEvaluation: false,
        support24x7: false
    },
    {
        minNodes: 100,
        maxNodes: 299,
        casesPerMonth: 4,
        technicalContacts: 1,
        premiumSupportOptional: false,
        standardSupport: true,
        introCallAndDemo: true,
        structuredEvaluation: false,
        support24x7: false,
        responseTimes: {
            p1: 4,
            p2: 8,
            p3: 12
        }
    },
    {
        minNodes: 300,
        maxNodes: 50000,
        casesPerMonth: 8,
        technicalContacts: 2,
        premiumSupportOptional: true,
        standardSupport: true,
        introCallAndDemo: true,
        structuredEvaluation: false,
        support24x7: false,
        responseTimes: {
            p1: 3,
            p2: 6,
            p3: 12
        }
    },
    {
        minNodes: 1500,
        maxNodes: 50000,
        casesPerMonth: 20,
        technicalContacts: 6,
        premiumSupportOptional: true,
        standardSupport: true,
        introCallAndDemo: true,
        structuredEvaluation: true,
        support24x7: true,
        responseTimes: {
            p1: 2,
            p2: 4,
            p3: 6
        }
    }
];

export const c4bStandardSubscription = [
    {
        pricePerNode: 650,
        minNodes: 1,
        maxNodes: 35
    },
    {
        pricePerNode: 16.50,
        minNodes: 40,
        maxNodes: 499
    },
    {
        pricePerNode: 16.10,
        minNodes: 500,
        maxNodes: 1999
    },
    {
        pricePerNode: 15.50,
        minNodes: 2000,
        maxNodes: 9999
    },
    {
        pricePerNode: 15,
        minNodes: 10000,
        maxNodes: 50000
    }
];

export const c4bPremiumSubscription = [
    {
        pricePerNode: 25.76,
        minNodes: 1500,
        maxNodes: 1999
    },
    {
        pricePerNode: 24.80,
        minNodes: 2000,
        maxNodes: 9999
    },
    {
        pricePerNode: 24,
        minNodes: 10000,
        maxNodes: 50000
    }
];
