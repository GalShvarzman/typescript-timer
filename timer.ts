export class Timer{
    private listeners = [];
    private interval;
    constructor(private time:number){
        this.listeners = [];
    }

    tick(cb){
        this.listeners.push(cb);
    }

    start(){
        this.interval = setInterval(()=>{
            this.listeners.forEach((cb)=>{
                cb();
            });
        }, this.time);
    }

    stop(){
        clearInterval(this.interval);
    }
}