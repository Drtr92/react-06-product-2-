import { useEffect, useState } from "react";
import styles from "./ProductList.module.css";

function ProductList() {
        const [list, setList] = useState([]);
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            fetch("https://dummyjson.com/products?limit=12")
                .then(res => res.json()) // string을 객체 / 배열 상태로 가공
                .then(json => {
                    setList(json.products);
                    setLoading(false);
                })
                .catch(err => {
                    console.log(err);
                    setLoading(false);
                });
        }, []);

        if (loading) {
            return <div>데이터를 로드 중입니다...</div>;
        }

        return <>
            <div className={styles.dummy}>{list}</div>
        </>;
}

export default ProductList;
