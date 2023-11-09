import React from 'react';
import { signal, computed, effect } from '@preact/signals-react';

const count = signal(0);
const double = computed(() => count.value * 2);
effect(() => console.log('double of count is ' + double.value))
const counter = () => 
<>
<button onClick={()=> count.value++}>Click me to increase count</button>
<div>You cicked {count} times.</div>
</>

export default counter;
export { double } 
