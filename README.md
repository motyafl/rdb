# RDB (Roman Data Browser)

RDB is a web platform for indexing, visualizing, and analyzing data from NASA's Nancy Grace Roman Space Telescope. It aggregates massive datasets from the telescope's Wide Field Instrument (WFI) into a single interactive mosaic map, allowing researchers to inspect all 18 detectors at once and drill down into individual sensor metrics right in the browser.

* **Full-Mosaic Overview:** View downsampled previews from all 18 WFI detectors simultaneously, mapped strictly to their physical geometry on the focal plane.
* **Lightweight S3 Indexing:** Navigate complex data releases effortlessly without digging through nested archive directories or downloading gigabytes of raw files locally.
* **Interactive Deep-Dive:** Click any detector on the mosaic to inspect isolated sensor metadata, scientific parameters, and custom browser-rendered plots.

## Why RDB?

The Nancy Grace Roman Space Telescope captures a field of view 100 times larger than Hubble's, generating terabytes of mosaic data per exposure across 18 separate matrix sensors. Exploring these releases manually creates major bottlenecks:

* **Fragmented Navigation:** Release file trees are massive, making it hard to locate specific sensor files for a given sky region.
* **No Big-Picture View:** Researchers lack a unified way to evaluate the quality of an entire 18-sensor exposure in a single window.
* **Heavy Local Workflows:** Adjusting visualization arguments or plotting basic curves usually requires pulling huge raw files from S3 onto local machines.

RDB solves this with a top-down workflow: a Python backend indexes and optimizes S3 arrays on the fly, while a React frontend handles interactive mosaic navigation, optical filter adjustments, contrast tuning, and live chart configuration.

## Getting Started

### Prerequisites

* Node.js (v22+)
* Python (3.10+)

### Installation

Clone the repository and install frontend dependencies:

```bash
git clone git@github.com:motyafl/rdb.git
cd rdb
npm install
```

Start the development server:

```bash
npm start
```

## Architecture

The platform is built around three core layers:

1. **Dashboard (Mosaic View):** Connects to S3 storage, optimizes raw sensor arrays, and renders the 18-detector focal plane layout.
2. **Detector View:** Isolates a single sensor node upon click, loading detailed telemetry, headers, and scientific plots.
3. **In-Browser Customization:** Lets users tweak optical filters, frequency ranges, contrast levels, and plot axes without reloading raw datasets.

## Contributing

RDB is under active development ahead of the first public Roman data releases. Bug reports, feature ideas, and pull requests are welcome.

