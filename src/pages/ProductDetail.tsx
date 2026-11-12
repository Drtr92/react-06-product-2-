import { Link, useParams } from "react-router";
import { useEffect, useState } from "react";
import type { Product } from "./ProductList";

function ProductDetail() {
    const { id } = useParams();     // string | undefined

    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 지금 사용자가 /product/ 만 일부러 치고 들어온 경우도 막는데
        // 실행이 아니라 App - ProductDetail 이 관계까지 생각해서 쓰는게 아니라
        // ProductDetail 만 보고 있는 것
        if (!id) return;
        
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then((json: Product) => setProduct(json))
            .catch((err: unknown) => {
                if (err instanceof Error) {
                    setLoading(false);
                } else {
                    console.log(err);
                }
            })
            .finally(() => setLoading(false));
    }, [id]);

    if (loading) {
        return <div className={styles.loading}>LOADING...</div>;
    }

    if (!product) {
        return <div className={styles.empty}>상품을 찾을 수 없습니다.</div>;
    }

    return (
        <div className={styles.container}>
            <Link to={"/"} className={styles.backBtn}>
                &larr; 목록으로
            </Link>
            <div className={styles.content}>
                <img src={product.thumbnail} alt={product.title} className={styles.image} />
                <div className={styles.info}>
                    <h1 className={styles.title}>{product.title}</h1>
                    <p className={styles.description}>{product.description}</p>
                    <ul className={styles.meta}>
                        <li>
                            <span className={styles.badge}>{product.category}</span>
                        </li>
                        <li>평점: {product.rating}</li>
                        <li className={styles.price}>$ {product.price}</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;
