export interface C4bNodePurchaseCutoffs {
    minNodes: number;
    maxNodes: number;
}

export const c4bNodePurchaseCutoffs: C4bNodePurchaseCutoffs = {
    minNodes: 100,
    maxNodes: 1000
};

export interface C4bNodeDefaults {
    minNodes: number;
    defaultNodes: number;
    maxNodes: number;
}

export const c4bNodeDefaults: C4bNodeDefaults = {
    minNodes: 1,
    defaultNodes: 500,
    maxNodes: 50000
};

export interface C4bAddOnPrice {
    packaging: number;
    standardSupport: number;
}

export const c4bAddOnPrice: C4bAddOnPrice[] = [
    {
        packaging: 600,
        standardSupport: 1000
    }
];

export interface C4bSupportNodes {
    community: number;
    standard: number;
    premium: number;
}

export const c4bSupportNodes: C4bSupportNodes[] = [
    {
        community: 35,
        standard: 100,
        premium: 1500
    }
];

export interface C4bIncludedItems {
    minNodes: number;
    maxNodes: number;
    casesPerMonth: number;
    technicalContacts: number;
    premiumSupportOptional: boolean;
    standardSupport: boolean;
    introCallAndDemo: boolean;
    support24x7: boolean;
    responseTimes?: {
        p1: number;
        p2: number;
        p3: number;
    };
}

export const c4bIncludedItems: C4bIncludedItems[] = [
    {
        minNodes: 1,
        maxNodes: 99,
        casesPerMonth: 0,
        technicalContacts: 0,
        premiumSupportOptional: false,
        standardSupport: false,
        introCallAndDemo: false,
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
        support24x7: true,
        responseTimes: {
            p1: 2,
            p2: 4,
            p3: 6
        }
    }
];

export interface C4bSubscription {
    pricePerNode: number;
    minNodes: number;
    maxNodes: number;
}

export const c4bStandardSubscription: C4bSubscription[] = [
    {
        pricePerNode: 700,
        minNodes: 1,
        maxNodes: 35
    },
    {
        pricePerNode: 18.00,
        minNodes: 40,
        maxNodes: 499
    },
    {
        pricePerNode: 17.60,
        minNodes: 500,
        maxNodes: 1999
    },
    {
        pricePerNode: 17.00,
        minNodes: 2000,
        maxNodes: 9999
    },
    {
        pricePerNode: 16.50,
        minNodes: 10000,
        maxNodes: 50000
    }
];

export const c4bPremiumSubscription: C4bSubscription[] = [
    {
        pricePerNode: 29.04,
        minNodes: 1500,
        maxNodes: 1999
    },
    {
        pricePerNode: 28.04,
        minNodes: 2000,
        maxNodes: 9999
    },
    {
        pricePerNode: 27.23,
        minNodes: 10000,
        maxNodes: 50000
    }
];
