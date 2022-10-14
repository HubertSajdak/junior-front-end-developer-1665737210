import Appbar from "../components/Appbar/Appbar";
import styles from "../BusinessContext.module.css";
import ContextList from "../components/ContextsList/ContextList";
import { mockedData } from "../../../utils/mockData";
import ContextMessage from "../components/ContextMessage/ContextMessage";
const BusinessContext = () => {
	return (
		<div className={styles.businessCtx}>
			<Appbar breadcrumbTitle="business context" />
			<div className={styles.wrapper}>
				<ContextList contextList={mockedData} />
				<ContextMessage />
			</div>
		</div>
	);
};

export default BusinessContext;
