export default abstract class Middleware {
    private next: Middleware;

    public linkWith(next: Middleware): Middleware {
        this.next = next;
        return next;
    }

    protected checkNext(email: string, password: string): boolean {
        if (this.next === undefined){
            return true;
        }
        return this.next.check(email, password); 
    }
    public abstract check(email: string, password: string);
}