const {createWriteStream} = require('fs');
const vm = require('node:v8');
module.exports = async () => {}
const ws = createWriteStream(`${__dirname}/${process.version}-${String(Date.now()).substring(-5)}.csv`);

ws.write([
    'Total Heap Size',
    "Used Heap Size",
    "Heap Size Limit",
    "Number of Native Contexts",
    "RSS",
    "External",
    "Array Buffers",
    "Process Heap Used"
].join(","));
ws.write("\n");

setInterval(() => {
    const {
        total_heap_size,
        used_heap_size,
        heap_size_limit,
        number_of_native_contexts
    } = vm.getHeapStatistics();
    const {
        rss,
        external,
        arrayBuffers,
        heapUsed
    } = process.memoryUsage();
    ws.write([
        total_heap_size,
        used_heap_size,
        heap_size_limit,
        number_of_native_contexts,
        rss,
        external,
        arrayBuffers,
        heapUsed
    ].join(","))
    ws.write("\n");
}, 500);