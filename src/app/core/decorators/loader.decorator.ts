import { catchError, map } from "rxjs";

export function LoaderEnabled(): MethodDecorator {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  
      const original = descriptor.value;
      descriptor.value = function () {
        if (this.timer) {
          clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            //  ShowLoader here
        }, 200);
        return original.apply(this, arguments)
          .pipe(
            map((res) => {
              clearTimeout(this.timer);
              setTimeout(() => {
                //hideLoader();
              }, 200);
              return res;
            }),
            catchError((err) => {
              clearTimeout(this.timer);
              setTimeout(() => {
                // hideLoader();
              }, 200);
              throw err;
            })
          );
      };
      return descriptor;
    };
  
  }
  