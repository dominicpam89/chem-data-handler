import { Box, LinearProgress } from "@mui/material";

/**
 * A UI loader component that displays a linear progress bar.
 * This component is intended to be displayed when there is asynchronous data that needs to be loaded first.
 * @component
 * @example
 * // Usage in a component
 * const MyComponent = () => {
 *   const [loading, setLoading] = useState(true);
 *   useEffect(() => {
 *     fetchData().then(() => setLoading(false));
 *   }, []);
 *   return (
 *     <div>
 *       {loading ? <UILoader /> : <DataDisplay />}
 *     </div>
 *   );
 * };
 */

const UILoader = () => {
	return (
		<Box sx={{ width: "100%" }} aria-label="loader-container">
			<LinearProgress aria-label="loader" />
		</Box>
	);
};

export default UILoader;
