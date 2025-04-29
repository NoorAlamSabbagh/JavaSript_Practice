interface User {
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    // startTrail?: () => string
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

const alam : User = {
    dbId: 123,
    email: "a@a.com",
    userId: 1234,
    startTrail: () => {
        console.log("Trail started")
        return "Trail started"
    },
    getCoupon: (name: string, off: number) => {
        console.log(`Coupon ${name} of ${off}% applied`)
        return off
    }     
}

alam.email = "a@a.com"
// alam.dbId = 1234 //error: cannot assign to 'dbId' because it is a read-only property
alam.googleId = "1234" //ok