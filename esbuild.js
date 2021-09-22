import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

esbuild.build({
	entryPoints: ["core/index.js"],
	bundle: true,
	format: "esm",
	outfile: "dist/index.js",
	plugins: [nodeExternalsPlugin()],
});
