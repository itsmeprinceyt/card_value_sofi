// File: utils/calculateValue.ts

const calculateValue = (
    group: number,
    wishlist: number,
    scalingConstant: number
): number => {
    // Validate input parameters
    if (wishlist <= 0) {
        throw new Error("Wishlist count must be greater than 0.");
    }
    if (group <= 0) {
        throw new Error("Group count must be greater than 0.");
    }
    if (scalingConstant <= 0) {
        throw new Error("Scaling constant must be greater than 0.");
    }

    // Applying a logarithmic scaling for diminishing returns on wishlist count
    const scaledWishlist = Math.log(wishlist + 1); // Adding 1 to avoid log(0)

    // Calculate the value based on the formula
    const value = (scalingConstant / group) * scaledWishlist;

    return parseFloat(value.toFixed(2)); // Return value rounded to 2 decimal places
};

export default calculateValue;
