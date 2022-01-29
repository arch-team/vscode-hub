import java.util.Map;

public class Order extends Object {
    private String orderId;
    private Map<String, String> orderMap;

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderMap(Map<String, String> orderMap) {
        this.orderMap = orderMap;
    }

    public Map<String, String> getOrderMap() {
        return orderMap;
    }
}
