<?php
/**
 * ALIPAY API: alipay.fund.coupon.order.refund request
 *
 * @author auto create
 *
 * @since  1.0, 2018-05-21 16:48:54
 */

namespace Alipay\Request;

class AlipayFundCouponOrderRefundRequest extends AbstractAlipayRequest
{
    /**
     * 受托退款接口
     **/
    private $bizContent;

    public function setBizContent($bizContent)
    {
        $this->bizContent = $bizContent;
        $this->apiParams['biz_content'] = $bizContent;
    }

    public function getBizContent()
    {
        return $this->bizContent;
    }
}
