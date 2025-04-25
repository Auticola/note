## 课程目录与实验

| **章节**                     | **核心内容**                                | **对应实验（Lab）**                                                                 |
|------------------------------|-------------------------------------------|-----------------------------------------------------------------------------------|
| **1. 计算机系统漫游**         | 系统层次结构、编译流程、硬件组成             | 无直接对应实验                                                                     |
| **2. 信息的表示与处理**       | 二进制、整数/浮点编码、位运算               | [Data Lab](http://csapp.cs.cmu.edu/3e/datalab.pdf)：用位操作实现逻辑和算术运算      |
| **3. 程序的机器级表示**       | x86-64汇编、控制流、栈帧结构                | [Bomb Lab](http://csapp.cs.cmu.edu/3e/bomblab.pdf)：逆向破解二进制炸弹程序          |
| **4. 处理器体系结构**         | 流水线、Y86-64指令集、HCL硬件描述语言       | [Architecture Lab](http://csapp.cs.cmu.edu/3e/archlab.pdf)：实现流水线CPU模拟器      |
| **5. 优化程序性能**           | 编译器优化、CPU缓存、循环展开               | 无独立实验（结合Cache Lab）                                                       |
| **6. 存储器层次结构**         | 缓存原理、局部性、矩阵分块优化              | [Cache Lab](http://csapp.cs.cmu.edu/3e/cachelab.pdf)：编写缓存模拟器和优化代码      |
| **7. 链接**                   | 静态/动态链接、符号解析、重定位             | （非官方）[Link Lab](http://csapp.cs.cmu.edu/3e/linklab.pdf)：解析ELF文件           |
| **8. 异常控制流**             | 进程、信号、非局部跳转                     | [Shell Lab](http://csapp.cs.cmu.edu/3e/shlab.pdf)：实现支持作业控制的Shell          |
| **9. 虚拟内存**               | 地址翻译、页表、内存映射                    | [Malloc Lab](http://csapp.cs.cmu.edu/3e/malloclab.pdf)：实现动态内存分配器          |
| **10. 系统级I/O**             | 文件描述符、RIO包、元数据操作               | 无独立实验（结合Proxy Lab）                                                       |
| **11. 网络编程**              | Socket API、HTTP协议、Web服务器            | [Proxy Lab](http://csapp.cs.cmu.edu/3e/proxylab.pdf)：构建并发HTTP代理服务器        |
| **12. 并发编程**              | 线程、同步（锁/信号量）、并发漏洞           | （非官方）[Thread Lab](https://csapp.cs.cmu.edu/3e/threadslab.pdf)：多线程优化       |
