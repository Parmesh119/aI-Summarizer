import { useEffect, useState } from "react"
import { linkIcon } from "../assets"
import { useLazyGetSummaryQuery } from '../services/article.js'
import { copy } from '../assets'

const Demo = () => {
    const [allArticles, setAllArticles] = useState([])
    const [summary, setSummary] = useState({
        url: '',
        summary: ''
    })

    const [ getSummary, { erorr, isFetching } ] = useLazyGetSummaryQuery()

    useEffect(() => {
        const articleFromStorage = JSON.parse(localStorage.getItem('article'))
        if(articleFromStorage) {
            setAllArticles(articleFromStorage)
        }
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const { Summary_article } = await getSummary({articleUrl: summary.url})
        if(Summary_article?.summary) {
            const new_summary = { ...summary, summary: Summary_article.summary }
            const updateArticle = { new_summary, ...allArticles }
            setSummary(new_summary)
            setAllArticles(updateArticle)
            console.log(new_summary)
            localStorage.setItem('article', JSON.stringify(updateArticle))
        }
    }
    return (
        <>
            <section style={{
                marginTop: "16px",
                width: "100%",
                maxWidth: "100%",
            }}>
                <form onSubmit={handleSubmit}>
                    <img src={linkIcon} alt="Link" style={{
                        left: "100%",
                        justifyContent: "end",
                        alignItems: "end",
                        right: "0",
                        marginTop: "2px",
                        marginBottom: "2px",
                        marginLeft: "3px",
                    }}/>
                    <input type="url" placeholder="Enter the text" required style={{
                        width: "100%",
                        height: "3rem",
                        borderRadius: "0.5rem",
                        padding: "0.5rem",
                        fontSize: "1.5rem",
                        border: "none",
                        outline: "none",
                        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25)",
                        marginTop: "1rem",
                        marginBottom: "1rem"
                    }} value={summary.url} onChange={(e) => setSummary({...summary, url: e.target.value })} />
                    <button type="submit" style={{
                        backgroundColor: "black",
                        color: "white",
                        fontWeight: "bold",
                        padding: "10px",
                        borderRadius: "10px", 
                        position: "revert"
                    }} onClick={() => {}}>
                        Summarize</button>
                </form>

                {/* History */}
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "1px",
                    maxHeight: "60px",
                    overflowY: "auto",
                    backgroundColor: "darkblue"
                }}>
                    
                    {
                        allArticles.map((article, index) => {
                            <div key={index} onClick={() => setAllArticles(article)} className="link_card">
                                <div className="copy_btn">
                                    <img src={copy} alt="copy" style={{
                                        width: "40%",
                                        height: "40%",
                                        objectFit: "contain"
                                    }}/>
                                </div>
                                <p>
                                    {article.url}
                                </p>
                            </div>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Demo