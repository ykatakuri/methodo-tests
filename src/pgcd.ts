export function pgcd(a: number, b: number): number {
    let p = a, q = b;
    while (p != q) {
        if (p > q) {
            p = p - q;
        }
        else {
            q = q - p;
        }
    }
    return p;
}