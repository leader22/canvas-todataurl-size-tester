# canvas-todataurl-size-tester

## TL;DR

Use `webp` if available.

## Test results

> Mozilla/5.0 (Macintosh; Intel Mac OS X 11_1_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.50 Safari/537.36

### pic.png

![](./pic.png)

| Size | Type |  Quality   |    Byte |
|:----:|:----:|:----------:| -------:|
| 1000 | png  | (original) | 2394801 |
| 300  | png  |     -      |  305774 |
| 300  | jpeg |    0.92    |   60687 |
| 300  | webp |    0.92    |   58415 |
| 300  | webp |    0.4     |   18371 |
| 300  | jpeg |    0.4     |   17727 |

### illust.png

![](./illust.png)

| Size | Type |  Quality   |   Byte |
|:----:|:----:|:----------:| ------:|
| 482  | png  | (original) | 154413 |
| 300  | png  |     -      | 103006 |
| 300  | jpeg |    0.92    |  20367 |
| 300  | webp |    0.92    |  14915 |
| 300  | webp |    0.4     |   7071 |
| 300  | jpeg |    0.4     |   5775 |

⚠️ : `jpeg` can't render opacity


