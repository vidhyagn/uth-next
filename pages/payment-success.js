import React from 'react';
import Head from 'next/head'
import Link from "next/link";

class PaymentSuccess extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      paymentObj : {
        email: "",
        method: "",
        mobile: "",
        ramt: "",
        rp_id: ""}
    }
  }
    static getInitialProps({ pathname }){
        return { pathname }
    }
  componentDidMount() {
      //console.log(this.props)
    let queryStr = this.props.pathname;
    //console.log(queryStr);
    queryStr = queryStr.replace('?','');
    console.log(queryStr)
    let queryObj = JSON.parse('{"' + decodeURI(queryStr.replace(/&/g, "\",\"").replace(/=/g,"\":\"")) + '"}');
      console.log(queryObj)
    this.setState({
      paymentObj : queryObj
    })
  }
  render() {
    let paymentDetail = this.state.paymentObj;

    return (
        <>
          <Head>
            <meta charSet="UTF-8" />
            <title>OM VILLAS ,Varanasi| Best Hotels in varanasi| Best price deals luxury hotels in Varanasi| Book your
                stay now</title>
            <meta name="description"
            content="Om Villas Varanasi accomplishes help you with the best existence of Varanasi with an exceptional methodology towards accommodation. Among one of the best hotels in varansi Om villas provides free wifi,spa, banquet halls, restaurant, bar and swimming pool.Regardless of whether it is a Business Meeting or an occasion ..." />
            <meta name="keywords"
            content="best hotels in thekkady, best hotels in kochi, best hotels in munnar, best hotels in bangalore,best hotels in varanasi,best price luxury hotels in kochi " />
            <meta name="author" content="UTH Group Of Hotels" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="OM VILLAS ,Varanasi| Best Hotels in varanasi| Best price deals luxury hotels in Varanasi| Book your
                stay now" />
            <meta property="og:description" content="Om Villas Varanasi accomplishes help you with the best existence of Varanasi with an exceptional methodology towards accommodation. Among one of the best hotels in varansi Om villas provides free wifi,spa, banquet halls, restaurant, bar and swimming pool.Regardless of whether it is a Business Meeting or an occasion ..." />
            <meta property="og:url" content="%PUBLIC_URL%" />
            <meta property="og:site_name" content="UTH | Group of Hotels" />
            <meta property="og:image" content="http://159.65.153.59/site/assets/images/fav/og-image.jpg" />
            <meta name="twitter:card" content="http://159.65.153.59/site/assets/images/fav/og-image.jpg" />
            <meta name="twitter:title" content="UTH | Group of Hotels" />
            <link rel="stylesheet" charSet="UTF-8"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
            <link rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
          </Head>

          <main>
            <div className="invoice-wrapper">
              <center>
                <div className="invoice-block">
                  <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%"
                         className="invoice-header">
                    <tbody>
                    <tr>
                      <td bgcolor="#404A42" align="center">
                        <img src="https://uthhotels.com/assets/images/uth-logo.png" width="75"/>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%"
                         className="invoice-body">
                    <tbody>
                    <tr>
                      <td bgcolor="#FFFFFF">
                        <table align="left" border="0" cellPadding="0" cellSpacing="0" width="100%"
                               className="invoice-inner">
                          <tbody>
                          <tr>
                            <td valign="top" style={{paddingTop: '0px'}}>
                              <h2 align="center">
                                <span className="font-35"><strong>₹ {parseFloat(paymentDetail.ramt).toFixed(2)}</strong></span>
                              </h2>
                              <h3 align="center">
                                                        <span className="font-16">
                                                            <img data-file-id="1811575" height="16"
                                                                 src="https://mcusercontent.com/7634713db355f2a15cdee2a48/images/24fcc40c-5e79-4627-9e6f-cbfe0f77bec8.png"
                                                                 width="16" height="16"/>&nbsp;
                                                          <span className="success-text">Paid Successfully</span>
                                                        </span>
                              </h3>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td bgcolor="#FFFFFF" style={{paddingTop: '0px'}}>
                        <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%"
                               className="invoice-details">
                          <tbody>
                          <tr>
                            <td valign="top" width="50%" style={{padding: '0px 18px 18px 40px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">
                                                                <strong>Payment Id</strong>
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                            <td valign="top" width="50%" align="right" style={{padding: '0px 40px 18px 18px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">{paymentDetail.rp_id}
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td valign="top" width="50%" style={{padding: '0px 18px 18px 40px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">
                                                                <strong>Paid On</strong>
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                            <td valign="top" width="50%" align="right" style={{padding: '0px 40px 18px 18px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">{paymentDetail.date}
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td valign="top" width="50%"
                                style={{padding: '0px 18px 30px 40px', borderBottom: '1px solid #EAEAEA'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">
                                                                <strong>Method</strong>
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                            <td valign="top" width="50%" align="right"
                                style={{padding: '0px 40px 30px 18px', borderBottom: '1px solid #EAEAEA'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">{paymentDetail.method}
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td bgcolor="#FFFFFF" style={{paddingTop: '0px', borderBottom: '5px solid #EAEAEA'}}>
                        <table align="center" border="0" cellPadding="0" cellSpacing="0" width="100%"
                               className="invoice-details">
                          <tbody>
                          <tr>
                            <td valign="top" width="50%" style={{padding: '0px 18px 18px 40px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">
                                                                <strong>Email</strong>
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                            <td valign="top" width="50%" align="right" style={{padding: '0px 40px 18px 18px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">
                                                                <a href={`mailto:${paymentDetail.email}`}
                                                                   target="_blank"
                                                                   style={{color: '#007C89'}}>{paymentDetail.email}</a>
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td valign="top" width="50%" style={{padding: '0px 18px 18px 40px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">
                                                                <strong>Mobile Number</strong>
                                                            </span>
                                                        </span>
                              </div>
                            </td>
                            <td valign="top" width="50%" align="right" style={{padding: '0px 40px 18px 18px'}}>
                              <div align="left">
                                                        <span className="grey-text">
                                                            <span className="font-14">{paymentDetail.mobile}</span>
                                                        </span>
                              </div>
                            </td>
                          </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    <tr>
                      <td align="center">
                        <Link href="/" style={{color: '#848484'}}>
                            <><span
                            style={{display: 'inline-block', transform: 'rotate(180deg)', marginRight: '10px'}}>➔</span>Back
                          to home</></Link>
                      </td>
                    </tr>

                    </tbody>
                  </table>
                </div>
              </center>
            </div>
          </main>
          </>
    )
  }
}

export default PaymentSuccess;