import { useAppDispatch, useAppSelector } from 'core/frameworks/Redux/hooks';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import Text from "@atoms/Typography/text";
import styles from "./Pagination.module.scss";
import { useCallback, useEffect, useState } from 'react';
import { fetchPage, fetchSearch } from '@adapters/Redux/Search/Thunk';

const Pagination = () => {
    const dispatch = useAppDispatch();
    const { total_pages, page, text } = useAppSelector(state => state.search);

    const [leftActive, setLeft] = useState(page > 1);
    const [rightActive, setRight] = useState(page !== total_pages);

    const goPrevious = useCallback(() => {
        dispatch( fetchPage({page: page - 1, text}) );
        window.scrollTo(0,0);
    },[page, dispatch, text]);

    const goNext = useCallback(() => {
        dispatch(fetchPage({page: page + 1, text}));
        window.scrollTo(0,0);
    }, [dispatch, page, text]);


    useEffect(() => {
        console.log('pagination ',page, total_pages);
        setLeft(page > 1);
        setRight(page !== total_pages);
    }, [page, total_pages]);

    return (
        <div className={"d-flex justify-content-center align-items-center"}>
            <div>
                <FaChevronLeft onClick={() =>  { if(leftActive) goPrevious(); }} className={"fs-1 " + (leftActive ? styles.Arrow : styles.ArrowDisabled)} />
            </div>
            <div>
                <Text className={"fs-1"}>{page}</Text>
            </div>
            <div>
                <FaChevronRight onClick={ () => { if(rightActive) goNext(); }} className={"fs-1 " +(rightActive ? styles.Arrow : styles.ArrowDisabled) } />
            </div>
        </div>
    )
}

export default Pagination;