import React, { Fragment, useCallback, useEffect, useState } from "react";
import styles from './Search.module.scss';
import debounce from 'lodash/debounce';
import { Col, Container, Form, Row } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "core/frameworks/Redux/hooks";
import { fetchSearch } from "@adapters/Redux/Search/Thunk";
import { useRouter } from "next/dist/client/router";

const Search = () => {

    const dispatch = useAppDispatch();
    const { text } = useAppSelector(state => state.search);
    const router = useRouter();

    const [textSearch, setText] = useState(text);
    
    const updateSearchText = (sText: string) => {
        // console.log('debounced', sText);
        dispatch(fetchSearch(sText));
    };

    const debounceOnChange = useCallback(
        debounce(updateSearchText, 500)
        , []);

    useEffect(() => {
        if(router.route !== '/' && textSearch !== '') router.push('/');
    }, [router, textSearch]);
    
    useEffect(() => {
        // if(router.route !== '/') router.push('/');
        debounceOnChange(textSearch);
    }, [textSearch, debounceOnChange, router]);

    useEffect(() => {
        if(text === textSearch) return;
        setText(text);
    }, [text]);
    
    const onChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }


    return (
        <Fragment>
            <div className={"d-flex align-items-center"}>
                <Form.Control value={textSearch} onChange={onChange} className={styles.inputSearch}></Form.Control>
                <Form.Label column> <FaSearch color="white" /> </Form.Label>
            </div>
        </Fragment>
    )
}

export default Search;