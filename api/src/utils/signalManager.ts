const abortController  = new AbortController();
export const signal: AbortSignal = abortController.signal;

type Void = () => void;
const { SIGINT, SIGTERM, SIGQUIT } = Deno.Signal;
const signals = [SIGINT, SIGTERM, SIGQUIT];

async function onSignal(signal: number, callback: Void) {
  for await (const _ of Deno.signal(signal)) {
    callback();
  }
}

export function startListeningForTerminationSignal() {
    for (const signal of signals) {
        onSignal(signal, () => { 
            abortController.abort(); 
        });
    }
}
