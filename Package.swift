// swift-tools-version: 5.9
// SwiftPM reads this manifest from the repository root, so the Swift sources live under packages/swift.
import PackageDescription

let package = Package(
    name: "OpenNavoDesign",
    platforms: [.macOS(.v13), .iOS(.v16)],
    products: [
        .library(name: "OpenNavoDesign", targets: ["OpenNavoDesign"])
    ],
    targets: [
        .target(name: "OpenNavoDesign", path: "packages/swift/Sources/OpenNavoDesign"),
        .testTarget(
            name: "OpenNavoDesignTests",
            dependencies: ["OpenNavoDesign"],
            path: "packages/swift/Tests/OpenNavoDesignTests"
        )
    ]
)
