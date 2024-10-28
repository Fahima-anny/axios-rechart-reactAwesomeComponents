import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    let PriceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 20,
            "features": [
                "Access to gym during working hours",
                "Locker room access",
                "1 towel per visit",
                "Free water fountain access",

                "Free fitness assessment twice per month",


            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 35,
            "features": [
                "24/7 gym access",
                "Locker room access",

                "Group fitness classes",
                "Unlimited towel service",
                "Access to advanced cardio and strength equipment",

            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 50,
            "features": [
                "24/7 gym access",
                "Locker room access with personal locker",
                "Free Wi-Fi",
                "Group fitness classes",
                "Personal training sessions (2 per month)",
                "Sauna and spa access",
                "Unlimited towel service",

            ]
        },
        // {
        //     "id": 4,
        //     "name": "VIP",
        //     "price": 75,
        //     "features": [
        //         "24/7 gym access",
        //         "Locker room access with private shower",
        //         "Free Wi-Fi",
        //         "Group fitness classes",
        //         "Personal training sessions (4 per month)",
        //         "Sauna and spa access",
        //         "Unlimited towel and laundry service",
        //         "Private fitness consultation rooms",
        //         "Access to advanced and premium equipment",
        //         "Nutrition and diet consultation",
        //         "Priority booking for classes and equipment",
        //         "Complimentary gym apparel",
        //         "Exclusive VIP lounge access",
        //         "Free entry to monthly wellness workshops"
        //     ]
        // }
    ]


    return (
        <div>

            <h1 className="text-2xl text-center font-bold">Best prices in the town</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto w-10/12">
                {
                    PriceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;