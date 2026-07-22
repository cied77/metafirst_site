import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  Menu,
  X,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Smartphone,
  PenTool,
  Cloud,
  Boxes,
  LifeBuoy,
  Instagram,
  Facebook,
  Twitter,
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle2,
  XIcon,
} from "lucide-react";

const LOGO_SRC = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAwQAAABiCAYAAADuvhQ4AAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKL2lDQ1BJQ0MgUHJvZmlsZQAASMedlndUVNcWh8+9d3qhzTDSGXqTLjCA9C4gHQRRGGYGGMoAwwxNbIioQEQREQFFkKCAAaOhSKyIYiEoqGAPSBBQYjCKqKhkRtZKfHl57+Xl98e939pn73P32XuftS4AJE8fLi8FlgIgmSfgB3o401eFR9Cx/QAGeIABpgAwWempvkHuwUAkLzcXerrICfyL3gwBSPy+ZejpT6eD/0/SrFS+AADIX8TmbE46S8T5Ik7KFKSK7TMipsYkihlGiZkvSlDEcmKOW+Sln30W2VHM7GQeW8TinFPZyWwx94h4e4aQI2LER8QFGVxOpohvi1gzSZjMFfFbcWwyh5kOAIoktgs4rHgRm4iYxA8OdBHxcgBwpLgvOOYLFnCyBOJDuaSkZvO5cfECui5Lj25qbc2ge3IykzgCgaE/k5XI5LPpLinJqUxeNgCLZ/4sGXFt6aIiW5paW1oamhmZflGo/7r4NyXu7SK9CvjcM4jW94ftr/xS6gBgzIpqs+sPW8x+ADq2AiB3/w+b5iEAJEV9a7/xxXlo4nmJFwhSbYyNMzMzjbgclpG4oL/rfzr8DX3xPSPxdr+Xh+7KiWUKkwR0cd1YKUkpQj49PZXJ4tAN/zzE/zjwr/NYGsiJ5fA5PFFEqGjKuLw4Ubt5bK6Am8Kjc3n/qYn/MOxPWpxrkSj1nwA1yghI3aAC5Oc+gKIQARJ5UNz13/vmgw8F4psXpjqxOPefBf37rnCJ+JHOjfsc5xIYTGcJ+RmLa+JrCdCAACQBFcgDFaABdIEhMANWwBY4AjewAviBYBAO1gIWiAfJgA8yQS7YDApAEdgF9oJKUAPqQSNoASdABzgNLoDL4Dq4Ce6AB2AEjIPnYAa8AfMQBGEhMkSB5CFVSAsygMwgBmQPuUE+UCAUDkVDcRAPEkK50BaoCCqFKqFaqBH6FjoFXYCuQgPQPWgUmoJ+hd7DCEyCqbAyrA0bwwzYCfaGg+E1cBycBufA+fBOuAKug4/B7fAF+Dp8Bx6Bn8OzCECICA1RQwwRBuKC+CERSCzCRzYghUg5Uoe0IF1IL3ILGUGmkXcoDIqCoqMMUbYoT1QIioVKQ21AFaMqUUdR7age1C3UKGoG9QlNRiuhDdA2aC/0KnQcOhNdgC5HN6Db0JfQd9Dj6DcYDIaG0cFYYTwx4ZgEzDpMMeYAphVzHjOAGcPMYrFYeawB1g7rh2ViBdgC7H7sMew57CB2HPsWR8Sp4sxw7rgIHA+XhyvHNeHO4gZxE7h5vBReC2+D98Oz8dn4Enw9vgt/Az+OnydIE3QIdoRgQgJhM6GC0EK4RHhIeEUkEtWJ1sQAIpe4iVhBPE68QhwlviPJkPRJLqRIkpC0k3SEdJ50j/SKTCZrkx3JEWQBeSe5kXyR/Jj8VoIiYSThJcGW2ChRJdEuMSjxQhIvqSXpJLlWMkeyXPKk5A3JaSm8lLaUixRTaoNUldQpqWGpWWmKtKm0n3SydLF0k/RV6UkZrIy2jJsMWyZf5rDMRZkxCkLRoLhQWJQtlHrKJco4FUPVoXpRE6hF1G+o/dQZWRnZZbKhslmyVbJnZEdoCE2b5kVLopXQTtCGaO+XKC9xWsJZsmNJy5LBJXNyinKOchy5QrlWuTty7+Xp8m7yifK75TvkHymgFPQVAhQyFQ4qXFKYVqQq2iqyFAsVTyjeV4KV9JUCldYpHVbqU5pVVlH2UE5V3q98UXlahabiqJKgUqZyVmVKlaJqr8pVLVM9p/qMLkt3oifRK+g99Bk1JTVPNaFarVq/2ry6jnqIep56q/ojDYIGQyNWo0yjW2NGU1XTVzNXs1nzvhZei6EVr7VPq1drTltHO0x7m3aH9qSOnI6XTo5Os85DXbKug26abp3ubT2MHkMvUe+A3k19WN9CP16/Sv+GAWxgacA1OGAwsBS91Hopb2nd0mFDkqGTYYZhs+GoEc3IxyjPqMPohbGmcYTxbuNe408mFiZJJvUmD0xlTFeY5pl2mf5qpm/GMqsyu21ONnc332jeaf5ymcEyzrKDy+5aUCx8LbZZdFt8tLSy5Fu2WE5ZaVpFW1VbDTOoDH9GMeOKNdra2Xqj9WnrdzaWNgKbEza/2BraJto22U4u11nOWV6/fMxO3Y5pV2s3Yk+3j7Y/ZD/ioObAdKhzeOKo4ch2bHCccNJzSnA65vTC2cSZ79zmPOdi47Le5bwr4urhWuja7ybjFuJW6fbYXd09zr3ZfcbDwmOdx3lPtKe3527PYS9lL5ZXo9fMCqsV61f0eJO8g7wrvZ/46Pvwfbp8Yd8Vvnt8H67UWslb2eEH/Lz89vg98tfxT/P/PgAT4B9QFfA00DQwN7A3iBIUFdQU9CbYObgk+EGIbogwpDtUMjQytDF0Lsw1rDRsZJXxqvWrrocrhHPDOyOwEaERDRGzq91W7109HmkRWRA5tEZnTdaaq2sV1iatPRMlGcWMOhmNjg6Lbor+wPRj1jFnY7xiqmNmWC6sfaznbEd2GXuKY8cp5UzE2sWWxk7G2cXtiZuKd4gvj5/munAruS8TPBNqEuYS/RKPJC4khSW1JuOSo5NP8WR4ibyeFJWUrJSBVIPUgtSRNJu0vWkzfG9+QzqUvia9U0AV/Uz1CXWFW4WjGfYZVRlvM0MzT2ZJZ/Gy+rL1s3dkT+S453y9DrWOta47Vy13c+7oeqf1tRugDTEbujdqbMzfOL7JY9PRzYTNiZt/yDPJK817vSVsS1e+cv6m/LGtHlubCyQK+AXD22y31WxHbedu799hvmP/jk+F7MJrRSZF5UUfilnF174y/ariq4WdsTv7SyxLDu7C7OLtGtrtsPtoqXRpTunYHt897WX0ssKy13uj9l4tX1Zes4+wT7hvpMKnonO/5v5d+z9UxlfeqXKuaq1Wqt5RPXeAfWDwoOPBlhrlmqKa94e4h+7WetS212nXlR/GHM44/LQ+tL73a8bXjQ0KDUUNH4/wjowcDTza02jV2Nik1FTSDDcLm6eORR67+Y3rN50thi21rbTWouPguPD4s2+jvx064X2i+yTjZMt3Wt9Vt1HaCtuh9uz2mY74jpHO8M6BUytOdXfZdrV9b/T9kdNqp6vOyJ4pOUs4m3924VzOudnzqeenL8RdGOuO6n5wcdXF2z0BPf2XvC9duex++WKvU++5K3ZXTl+1uXrqGuNax3XL6+19Fn1tP1j80NZv2d9+w+pG503rm10DywfODjoMXrjleuvyba/b1++svDMwFDJ0dzhyeOQu++7kvaR7L+9n3J9/sOkh+mHhI6lH5Y+VHtf9qPdj64jlyJlR19G+J0FPHoyxxp7/lP7Th/H8p+Sn5ROqE42TZpOnp9ynbj5b/Wz8eerz+emCn6V/rn6h++K7Xxx/6ZtZNTP+kv9y4dfiV/Kvjrxe9rp71n/28ZvkN/NzhW/l3x59x3jX+z7s/cR85gfsh4qPeh+7Pnl/eriQvLDwG/eE8/s3BCkeAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAIXRFWHRDcmVhdGlvbiBUaW1lADIwMjI6MTI6MDggMTg6NTk6NDgsIdgaAABBf0lEQVR4Xu2dCZwUxfXHu3uOPVhAWS5BJaJGIKILCAaEYARDNP/EBIkkf6+oiX+NUVTECxSRQ25ENDFqookxif8/EhNjYjQeuCheXGo4FPFA5d7lWPaYme7+/6r79WzPbE9Pz+7Mbs/s+/JpXr031d1Vvd017011Vcm6rkvJHJAPHBeSQt9EciC2r2Drrkt6sSzJ9ZDVkJ9pkrYe20ud9E5bxT6MP7nl+r0nBgLyN3VZrpAU6VhNlo7UZalYU6R6pHeriv4JPns3Fou+/Ms5PT6h3RiGYRiGYZh2QjwgmCHPUKZIUy6Cwz8JDv9gw+gB5F+D/EsXSAuemK5P18jMtCGKMkO5/dprL5EVeZKm6BUIACQEAJKQ9rQasNt0SZP1dxAcLP21ev8ften8t2QYhmEYhmkPGAFBrVzbE+kV2IYb1ubxpiZpl5fpZRtJZ9qA6dftHqjLod/qinSacPLtAYCVtjZ7MBD/TEhZWhWJxM7/3fQeu+mwDMMwDMMwTIGiiJ4ByL9ha0kwIDhdkZS1CC5uWymvDJKNaSWuumptaPqkqmm6Enq7JcGAYVekkcGS4NOKokBjGIZhGIZhChn5oHRweEAKvE56tnhbk7SfcG9B6zD9qt0DpaLQo3DmhyQ7+YaDT2kvwYD1uWHTpaG/m1L+Dp2GYRiGYRiGKUAUBANHUjqbDKXegtu5tyB3XHXV2tCMa6umIRh4B058doMBIWWtC52KYRiGYRiGKVDg+uWMImyzh0pDX6uRawaYJiZbiF6Bo4LHrdYUeSac+HCyky9k3LmnrdGWPhjQIVUO5RiGYRiGYQoeuH05Z5giKWtq5dpbubeg5cw4a2VwxjVVtyuh0NtawOwVSHbyG22Nm1M+t2BApBmGYRiGYZjCp7XcvmJdku4ZIg99rUrh3oLmMuPn1SdLA055Q1Lk2XDYi5yc/EZb4+aUz+74p7LFOHxjGIZhGIYpeOD65R6x0gE5ncMCAWVNdVHtzcuV5QHzUyYdoldg1jVVt+Ov9Y4kS0Msh928pknBADn01tZocwgGhEy2YTNtTResYxiGYRiGYQoPuH+5xRYMWM6p6C2Yd2b4nNd3lnBvQTpEr0Cg/ylvaLI8G8FAUSonP24jPdGWeTAgZIxDNoZhGIZhmIIHLmDucAgGJLH8rS4cVEUapijyml0da7i3wAGjV+DqqtsDivQOHHaaQch2HW1OfqPN1FPlSxUM2PexggEVOsMwDMMwDFP45MztcwsGbLZiTZbnjeh4zmufda7pb+zISDOurhoQ7HfK61JAno1rZowVSLiOzQwGLJlsE3lNG/42kCIYEDrDMAzDMAxT+MD1yz7JwYDhfBq2xmDAckgpfbockNd+0rV99xaIXoE5V1fdHpTltXDSh5rXzLxWQjoFA9Z1NGSCrWkwYBwj2UZ2Kxiw5+NpRxmGYRiGYQofuH/ZxSkYMG2JwYDldNpsxZIszxvS9ZzKD7rX9DMO1o6Ye0XVgNBJp7ymy/JsOOlFycGAkE7BQPyzBFvLgwGRZhiGYRiGYQof+bB0+FzIZ021ZbQgGGi0ibyyVA9ndfq7O59bNEGboBoHL1BEr0DRCSffpAWU6ah/ceM1S74+rRsMCBnV9XHP/qzb82ZJ/c+ePXvKunbteiuSE7D1xlaF7ZVYLLYgFAq9j3RB0tDQcFw4HL4ZybHYemLbi+1vhw8fnllWVibSWUNV1bGKojxDaiHzpizLZ1K6CbquPw0xztQKH9T3Fvzd7yM1Z8yYMUO54447Lsa1/x+oX8NWj60S9938YDD4lsiTL+CabYL4iqkVLDra16+jfX2XdE/g2myH6GpqzuC4w3Dc90htEThfLQS+1XyP+PpvwCbK+yW2j1H2d7G9sWPHjteOPvroOth8wYEDB47A98tZaBdOh3oqtmOwdcNWgs3v7xcsQxsjvjNTomnaROR5jNT2wPqWBATLsYlf8k8WSraCgYTPZGl1TNYvG7i94xZxjkJD9ApIAflRLSANi9cb9oRrYMgWBQMbsH2E9PhMggEhVRkBwWX5ERDA+e1RWlr6Ih5g4UQkgMY0gu0qNFyPkqlggKP0XdTrj6h3GZnioM6fRSKRMUVFRVvJ1GJwvnGBQOA5UgsW1PM7qOc/SG0CPj8Ln79IakGD+2g36NujR4/DZMoJGzduDPfv3/9J3MvfJ1MclEHFNgn3+gNk8j0o7zbU5ThSCxLU8RnU8Xukegb77cF+rgFBNBqtQECwgdQWgfNpOB++2fIX1KEG4lm0Pb9EcPyqaW1dli9fHhgPcCl/CvUsyLx7sRjXsaG+vv74kpKSL8jkyNq1a0ODBg36EHXsQ6aCBvfVeLh9zWbdJ9InQyDvgBNbn+xMtjQYMDZFGq4o8rr3jjt0UyGNLZg4cXlg7pXVN0tBeU0Og4FaHO+2DR9/OlRV9HczDQbEZ/kEgoEn8OA2CQYEsIexPYIbvomjkc/EYrERcJCWo25NggEB7MeGw+GnhaNFJsYD+MJYA0fkn6Q6gmDgJeR7h9SCBvVcmOtgQIBgYAHuWcdnFPYAtmV4hr9FJsYH4O8xk5JMjhHtPLaJCAZW4pl8He2/+GW+1cDf+rzzzz//fXzn/C/K8S1s+TrK8DfpggHB4MGDo7jOS0gtaFDPDfjOexquX/MZoA+IlOqls1Q5NhBO5ItxpxKftTQYsOUr0WV5wYnHfbvyneMPnWSeOX8RvQKDOo95XZKleahbcbyu+Cyp3pDNCwZURfp3TNVOeeTW8rlvPzg4KsYjGPni+6QPBkTefFmHAA3VOWicxpDqCD5HO6b8RvQkkCmv2bFjRymc0sdRL1dnH59/rV+/fpeRynhA07SZ2MQj6Qoa0fmULFhQxz3gl6TmjEgkImaZu8bUnMG9LB7ipeK1IjIxbQjujefgnL5NKtOK4FEYjvZ/Nf4Gi3L9g8/BgwePxHmewvmexnnzenwn6hFpaGiYR2pa0PY9gn32kVqwWN95WWlYO2mdth6hlZ2tStJl+Bbdl8VgwLRBIm30Frz91UM3zlDy7wtB9ArMv6L6Zjkgr0EwMCyhjvi8ab0zCwbEVKFw5PfEZOliBAJnPzq120fmmSlffJ+kYEDsF/8MW9yW1h/yDXASLqSkK2jMupSWls4hNa/p0aPHjahPX1JdQb6LKMmkAY3/+lAo9DdSXVkBkD9rr2P5EdRvUWv0DuCaT8F9mvYnCOGQTJs27QekMm2Iqqp3U5JpA/AsCG7s37//i8JpJ3NWQaB+YseOHcV4qvFkynceKy4u/ozSaaG2L+c/iLQlaOPfmzVr1l9EGq5f8xC/OtsR0UWXaOljkajWH87kHxodVnOzO51xW3IwANkkn7AJKc6h6CUo8aJz+t1Q+fqA/OktWHBpVf8hHce8pgekeaiTOXDYqiM+t9fXlBkHAzqO81hNNDLgN7eV/8E8qw2R19jXIRgQkmz2YMA4bv50CJ5G0guXikaO0nmJGMyFBnoyqV44Tbz7SWnGBbRjs730DggmTJgg3mtfSGrBgbrt3bdvX87f2a+rqzsawlNQL1AUxXUwIJN7cG/8OxgMriaVaUPwXTASTvtL+/fv70ymrNDQ0HA8AvWXcPy8/r60wD0bxXf/PaR65vDhw8uwrxjkXZCgbjOnT59uuPRw/zLH+LaEw+hET61sT7fasotVRR0Hp3Kbo5Mv0k7BgPVZsg3HtZxU0yaPkBVp3aqB/u4tEL0CC6+ovlkPG+sKnG6vmyGRp4ktk2AAMiZLW1VNPfvXU8sve2L6UY4zyhj7In8mwYCw5RHlJNOCxi2ARu52UvMSNP7Xoh5HkJoW5C3+1re+1YlUJgVoGP8za9asFaR6Yvv27b/DfrtILShQr8XdunUTAxlzSnFx8Q24Rz2/9oC8w1RV/SapTBvAYwf8BZ6Jis6dOz+VrR9+xIx94XD4rziuCNYLhceLioo+obRnysrK9kAU3IQkAvGdN3PmzKdIzTwgiDuxppqSow51en5HzcGByDcX+aNxR1Ts28xgIO64mmmjt+DMU2+ofLnCf70Fcy/f129o2dhKlNPoFbDXzZDI08SWWTAQVSVpTlStGfjwHd1dZzsx9rcdzykYMHoPkq5zvowhAJmW9KKGhgZPr9v4jaqqqk5opK8n1TOKovAyc2lA4zjb+qXEK3369KnHfjmfjrO1QZ32VVdX309qzjh48GAXiCtNzTu4n2+hJNPK4N5Y2Vaz3DCpwffCmPHjx99Gaovo2rXrvTie4yQd+Qju2VgkEmn268LYd5E4BqkFA+oU7x0QZDTtqOHEWg6kLE09IurtfexPyvefKimhh+BsDvMSDMQ/w752J9WwOeWTpTocY1rl2sX3Ttcy+0LPNqJXYGjpmMmSIs9A2Y1AoEmZka9pvQ0n3/FaJOyLfJCro2rsyoen9/A0t/4F9++drgeku+zHjR/bkOa5E23YJGncKxP9P+0obuoqNF4ZvUOJfR7BPj8jNW/QNO02OEMZN2w1NTXd6ZeOFqF6mHYU13Y/xN9NLW+oeeqpp34hXgMi3TPi/d2OHTvmIijoinv025R2BNc6CvGkqWUPHPd53GePk5ozcD9Pw3ky/rUZ5RPz3w8JhULryOQ7UMS0046K6wyx29TyA7QBYtrLFr0uhHr7btpR5BF1yvl4mSTwTSsVYRPfX93TXZN0oA4NcF5PbslU03iuzkAbX5nueqVClAFCrDMhvm8OYhO63S8T6WQ/zcmWCi95xXUVm0BBmd5FOzOb9GYhvntxSQaQmk3Ow3E7UtoRlH8lhLim2eTQ3Xff/YtmBQTJTqyqSFO7NHgfoCle7bmo243X67I8C85mieV8CmlPx23Yx2MwQGUyHOVVkVjk8u+s6fqhedbWZcEl+05SAoFHcZ2GW2Vv4uQjX1PH33MwUIvj3vag+sD9Wga/ZE745d7peDTuso4VP7YhnYMBI59e0AFBtKGh4cTi4uJPyeR7aOG1j1HXjL80WjkgeB9lHEgq00xisdjpcLzeINURXOtDuNZ5+TrY559/XtK7d+9PUP7uZMoI1P3P2PfHpPoOlC9tQIC/8Uj8jV8jtd2Aa+O7gACOdP9wOLyZ1DaBFvs6Dc6rWBRxAoqc8dsPqOv/Yb8LSM0Y7C/W8zmL1LQgv/hR4h+Qz+B+Xg0+GD16dMH9mp4rcN0+wPV2HaeB793v43v3r6TmDLh+6XFyYjNF/HJ//K6Oi1VNH4RjrE52Tu2ymcGA0EcGw+EN/zjjwA2tObZA9Aosuaz6JgQD63CdchUMrFJjesUvp3W9L5NgwMB2rPixDekSDGDLo0HFGYMHMFRUVJSV7tXWory8/GqUu0W/IDGMX+jVq9fluJ+bFQwQPxQDHynNMHlP586d98Px+zeei2mQ/cUPMHAYM+0FOx/BTbMGAiMIG4RzZxIM/K6+vr4v9vk+gpjfIKDayMFA/gL3zx1HJxY2TcnMJ7U4aXfHLe/teG6UJulTcLw6ywGNO6LI08xgwPq8BN7e4iEjb1i5YvjenI+OF70Cp5eOrdRkeQGuU0kOgoE6TdIm/1K/f/Sv7m5ez4d1rPixDekeDIh0O3iqf4LGTCy37nvEugNodG8ilWHympUrVwZxP2cyU1YTsH8ADkiLjsEwfkXMdoag4PlXX311GBxvz2ue4LlQQqHQ5aRmRDAY9DTbF8oTRfn+G+f6SUlJyedkZvIcuH2pMZ1z01m0nETLYW9eOGAyQZugfm17x4W43wfheI29BfishcGAXY4MFoXX/+XMA9fnordAHHPJJdU3BkWvgCwNN8+bOhgQMsFGZU+0Ub7G9KqYqp36wPSuizPuFbAhdowf25DpgwFhK/SQAI1ZEciLwYk9evS4CuVtya+pDOMbRo0adQHuZ9fXaTzyk8OHD/NzwRQs4hd3PCu3wAG/lUxeaO4rQ57WG0BAcJ2iKH8ilSkQ4Po5YzmxdifR7rB7e9nInYHbO2754NPnRmm6PgXHrstiMGA55aWSIi85+azrX1l+1p4T6LQtRvQKdL54UqUUkBfhHDQeorHsZvmoLMjftJypy05pXAtt8gPSsmb3CiRAxxXl8hoMiHxS+5iX5oq6urpelPYl4l1rfCFw7wBTEMCRwO0sZ2UtARynpLS0dBKpDFOw4LmZB0f8z6S6gueib0NDQ0Y+j1gPBPulDdJRhtdQlgdJZQoIuH9NSRcMWLZsIHoLBn9EvQWy7j62QKQNaXOoIZvkEzYc27QZZR6lh8Ibnvz2/uta0lsg9l16SfWNITmwDuca0ej4pwhksE8TW7pgQJJWRXTt1GUt7BWwYxzbOIf3YEDo7eFFQDSAxcDXCx316tXrZyjnUaQyTF4TjUbH4X4+ldRscPW+fftcZ+lgmEKgtrZ2EhxyMXNPWkKh0BmU9EQ4HB5KSVdw/qWUZAoMuICJeA0GMp6bLw2nfdRxy6cfPD9KlbVbcI56qwzxskA6BgOGLSkfjmfaqMxmvlJdlpeeeM71rzxxTua9BfdNNHsFcIxFOJfRK2A/R/z8Vhr7NLG5BwN1qPvkZYEs9QrYENfDNRgwz58QDAhbxrP75y9XoqHtSWlfsXXr1iI4T7wyK1MwKB7XEIDj8Qy2tDNj4fk4EmS8lgHD5BsdOnQQU9Q+ZGru4Lk4mZKeQP60A/TxPMYQfP+TVKbAEG5fHK/BgJDZeGUoGdFbMOI/nedH1EhibwGk6eQ3Oxiw5xulhcIbfvddb2MLRJ5lF1XfqBcHxEj/EfFz2c6RaINExiY292BgVYOknbpsRvZ6BeyIAeDiOhjXQmy281vXJzkYEHp7AQ1hCZhCqq/o27fvFShfb1IZJq+JxWKn434WUyqmBXnvggOyjFRXcMwbNm7c6Hm1Y4bJV/Bc/I6S6cho8U08Q30o6caHrbF6OdM2wPUzySQYMJzK+J7ZZ/Sm8s0733t+lCZ6CxSp3kswYJTJyCfSjY66Uz7IUikgLTnmvOtfeeh7qWciEr0CXS6cVKkF5EW4FiXWMczjZCUYqEMdJ983K/u9AnaM82FrdPypLAm2xGBApLPdC+RzrvLb4ETh4KCR5hVZmYIhEAh47R14PhQKra2pqXkA6bQOiAia+/XrdxGpDFOw4Ll4H8+El/VzMu319vLaXbYXx2J8BNw/NL7Ymjishs05GBAy14jegjPXdp4fjSb2FghpOawJZcI+ZjqFo55swybJ0iglHFr/0ISqhN4Csa7Asouqb5LD5liBpten5cGAqkivNyj6oHtndl2s5Xp1ZZyz0fGnsiTYGusjdCsdK6BBxWhAv6CkI3AoSoGvpjCEg/MTlOtYUh1JVy+G8QuRSKQfxHmm5o6mafOE7NSpUxWE11ckpsyY0XrrzzBMG/IWSTcyXbCwlKQbtSSZAkQRvwI3cVgNm+0XY/o8no9srcHZG8o3V68RvQX6LXCi6xPKaUnkM9Peg4FGm14qKcqSHhdMWrnsh3tPFL0CI0NjK/HtsgCfl+QgGDB6BZbOWTbqgbvLt4g65hpxXnswENeNtHN9xFZIwHGeS0k3fl5TU+OLhb/Wrl0bgoOTduE0j/VimDYnFApNwT2dtmXBPf1WIBB4iVSpvr5+CWwRUlOCY/ebNm2ap4CDYfIcL75DCUmveHkpoH3MPdhOUSRyAuOOP4wJwYDNSbTbWtNhFL0F497oPF+NRsUqx29YZbHKa6abFQzYPx+phIPrlVBgHa7JcMOGYyfs29xgAJLSr4uVmhfPboVeARviRFZZ4tJIpw4GxFZIj76qqi/Dqagk1RE4FGUdOnS4gdQ2paKi4mKU5yukOoL6bISztJxUhvEtdXV1YhyMp1d6NE1LWISJFj56wtTcURSFB+AzBQ/afi+LgWU6LYiXX//LSTIFiCKmlow7/kh7CQYMm7F76/Jfb5dvrn39+ZFwtm9BmeqzGAxYshSbOVYAx07Y10swAGmmm4x3qINl8uK5y0Ytmds6vQJ2rLLEpZF2DwaEXmjTjsLRmEFJN35x8ODBLpRuE2gV19tJTQm+FGZia4tHkWEyori4+Abc02kH/eJ+3jJr1qy/kBonGo0u8HKv4xxfR/DvadAyw+Qxh0i6gW/yjNhP0o2MBioz+YUifgU2HGUonoMBbBnfallC9BZ8d6W9tyBrwUBjGueJ2yCbnMOwOeQTsmkw8HpM1wctvKd1ewXsiPJYZRJl9BIMiK3Qph0NBAIvwqlYRaojcCg6dezY8XpS24RRo0ZdiHK4TgGHemyaOXPm/5LKML4FAfaREJ6mBcV9vWC6w0xr4XB4E8RfTc0dr9OaMky+guekgZJuZORv4JifUTIl+F7qUV9f7zqujclf4P7hRsBmdxITneckmyFNp7ctGb+qfLP6yvMjVVkyewus8tnKHLclfJYiGIA00jh2gi0pf9zxb5JPpBOCAWNdgUXz2qZXwI5VJlFGr8GAyFeIswx57CW49sCBA0dQulVZvnx5AI2ul96BWU6OE8P4jbKysqtxT6edwQT39BebN29+nNQmqKpqDDT2wLhoNJrNhc8YxlfgeSqipBuZBgTbKOkKgvPvUpIpMGhQsbOT2MRmSNPp9YMnInoLLnih8/yIpA6Gg/5m6jJbNtRTlD05n7AJiWMm2poXDIgZhCJS2/YKJCPKmEkwIPIXIoFA4N9o+F4j1RE0tkd07NjxOlJblfHjx/8I5/8qqY6g/JtXrFjxJKkM41s+//zzEtzPk0h1Bff1vQMGDEg5eDgYDL6JPK+QmhKcT0ZeHkvAFDJlJN3IyPeIRCJrKOkKHq//URSlQD2E9o0iBVRHJ7GJzZCNTm9bvTLkxEX/6rLpL8+/cAbKmNhbYEmjzBQMJNiwWTYcJ9GWPhgQ0jxe/LrUaZI2edH8tu8VsGOU0yEYUAPWZ402KxgQtkKadtSOpml3UzIlwompqqrKdNq2FiGmTMR5p5KaEjhFsyZMmNDOlolg8pFevXqJqXPTru+Be7oa/JrUlODZ9Tqr1gUNDQ3HUZphCgo8U8dQ0o2MAoKSkpIv8Rx6eW1oYCwWu4RUpoAwBhUnOoSJ0kgbsjEYMGzm/r7hSW2CetHfO89XVXUIyvuWWWarHt6DAdMhTnSehWyaz5TWdcE+q8W6AvPn+6dXwKJpmc1gIMEm6mALBoStUAkEAs+j4VtNqiNo9LocccQR15LaKtxxxx0/xHn7k+oIyr1lxYoVfyaVYXwLvf7mdW2PX5aXl6cdKBkKhcSzK1aNdwXnDYbDYV+tK8IwWSTlgqo2vIwzSObvJF3B83VfNBo9hVSmQIDrRw6hzRG0O46mE50UDCCt+XTA6U+e7bLxn397YQTKTb0FzsGAUQdhwz6NNjMQSM5n2BLykc28LnWark/55NOXfdUrYEdEJ/EyQzoGA6IuSbZCG1Rsx8tYAjR6N+zbt8/L6o0thnoHppGaEjhD3DvA5AXjx48XAa7r4HgB7um62tra+0h1Bc8tsusJ05K6cFlNTU03SjNMIfF1km54mYkoATxfnqaxxnPdKRgMvqiq6jfJxBQAxixDducw7hCKtCGbBgOW9Cuit+CKFZ3na6K3QEnuLbDVEXkbbc0JBvTVekwfNG9h+cInn/SvkxYvM6SaXA9Ip2BA6IXsdQYCgX/BsXiDVEfQ6JUfeeSRPyc1p0ybNu0HON/JpDqC8n64YsWKP5HKML5FvGMMvL7H/2iHDh12UzoteAb+D8/CR6SmBOcvxXHbZCwQw+SKSCQyAPd2H1Ld2EnSM6FQ6BU8WxtJdQVl6IrnXIzJezQajQ4kM5PHyJ+XHTxXCijPJjiJIm3I1MEAnOSpAz8pm0PH8S0TJy4PnKmMmawp8gyUvTheH3zWWJ+Mg4E6ONF3btv+8hI/BwIWw/6+ezqc/Lu8BANxiS2qa+M+H3HU83QY34IGqQqNk5jaMCVosE5GY/cfUg1UVf02AoN/kuoIjr1n9+7dx/Xo0eMwmbKOcJ5QlrWoQwWZHNE07VLk/T2pBocPH+4Op2cXqSmpqanpXlZWtofUZoNyjsM1e45UR3DN3kddHL8gduzYUdq9e/dvkdqmoC7/CYfDH5LqO2Kx2OnBYNA1aMW1PoRr3apjXbzg5T4RoPwxODhfLSoq+phMnsCzcBWehV+RmhLRNuzdu7dPt27dasjUauDc2/C3cR3HgL/xSPyNHSc5wGcjsH/a8RetQK14zZLSWQHXZg/q5roqPNrsCrTZG0htETifhvPhWy01uA/7oz3YTKpvQV3moSppg23km498GU/Bi2frEjxbvyPVMzifuHaVkCKg2A3pZaGzbBDBuQ6j3Luqq6u35/K7Oheg7B/g7+T6Chja0+/jGfQ07XJLkD/vfPBcXVaebXR2TWcwIRgwHEf6rNFhnHrqNv8HBBb3T6waoIaVRyVFGtayYEBbrWrSZXOX+PP1ICdO+8fu6Sj/XU3rmDoYEGlVRkAwrHADAgH2fRP7DiPVETQ0N6GBXERq1sHDfh4e9qdJdQTl/PDVV18dMHr06IT14vItIMC1nIxruZDUNgVluRVl8TqVZasTy+OAAOV6CeVK+zoB8v0R+S4k1TOffvpp8bHHHvsJ9u1BppTQPbeY1FYDdWt2QCCe69LS0o+xfymZ2gzUQ5QjqwtS4ZgcEDQDtONd0d5/hKqkfeZx31+I+/6PpHpGvL565513voFzDCVT3oC/s3DbxI8L7yD5r7q6ur9n0vvYFqCcvgkIaNpRFAqPSqPj7x4MGDZs+cQvnuyycf8XG87A7XK9qkh7zPpkFAzsUiX9uq2fvzwqn4IBQXLdTOkeDIi/cXsAjaaXsQRTxC/bpGYVNNgytjtJTQkajdnJwUC+QVNQ3kQqU6DEYrFh+Dt7CQZ05PU6HiCBPn361GP3e0l1BWW5YePGjWlXSfYTCAYmo9xtHgww/gLO7VLcF55+AECA4zq9dirE+jZ4Li/D81VHprwB10bQF9sF+F79DZ6j7ajHnxFcDqYsjAuG2yccQcPJN9IeggHIfGT6S6Nj1//+iKWf7d57jCqr39dk/RHUaRPqFk2oI/IiHUF6o8ijSdp5h9R9fe5Z3GVZPrwilIx9ULEp0wcDQhbqtKN2EHX/Aw3GW6Q6gsalB/C00mqmoKH6Do7v2lihfFsrKyufIDVv6dWr189Q156kMgUKnimvYweea8kvwIcOHXoQz8ZBUlOCe+7ofv36/Tepvgf1Koe42tQYxkT0aOJe9nQf47nYVFxc/CmpGSN603GMK7EJdyhvwfUKY5sYDAZFj8ETooeFPmIcUITTl2kwINKq4quZNTNi6bMnNNz8m/K/3vJwl5/d8tCRA9ZXv1gS1eu7qVL0eE2PHn8oVt9t064XS2csPfJrM+/t8rPZS8r/tnTpCc2ZwssXxB1+Q3oLBoStvYCG1su6BFPEawqkZg1FUe6gZErQkM3J996BrVu3FuEa8mJRBY4YDwDxA1NzR/W+8rAjnTt33g/xoKm5I+498SoEqb6mrKzsepS3VWY3Y/yP6N3Cd8BCfFfcQ6a0IH+LF67E+f6A40zClr/OHoHnSfDfHTp0eD8Wi40iM5OE0UAmBwNCJgcDCTbkLVTy1ut3Q/ztjL+j92BAbIU87aidUCgkegneIdURNCa9jjnmmJ+SmhXgEH0bx3Udv4BybausrHyc1Lylb9++l6GuvUllChQ8S1Pwd0Yr4g7u6zeCweBKUptNXV3dvThWPakpQZn6T5s27buk+pYDBw4cAdGq658w/kQEsPiO+F7//v3fwf3reU0NPA9RBOa/JbVFIChYhuP9CFurD8rPBbiOPQKBwAu4ruPJxNgwGu7kYMByCB1tyGvZ8pVJ39laNOfKfefNuarq4VnXVG88uduYOjlUvEcPhD4KBUMfFZcU7zmx95jaqTft+8+tU6oevvWmfd+bNGlrEe2ed5h/v8yCAVXRC3raUTuapukeewluEb90k9pi0Ni2i7EDa9euDeHa3UoqU6DAOe8FcbGpuYPnzeuKw66UlpbugEiYeSsVeN4ynnGltenYseN1eFY6k8q0I0QAUF9ff6wIAtDuL7nzzju3iYGkuB8yndLzj8XFxdsp3WLw3PwfAoxTUaZ/kymvwfUsQp3+iOt8FpkYQhGLVCU7ifZ0gs0WDIgt35hx1srgPf9TNannMeWfSQHlaS0g/xT16Y8tFO/9sOqr6GFNlgdIsvRTLSj/NVza5ZMbb6u6VkxjSofLGzTxz1a3uLTS2OL1xiaCASHz2gvNkFAo9Hc0eGtIdQQNydHil25SWwQao7E43nBSHUF5tq1fvz7vewcqKiouQV29zJvN5DFwQsSrLmkDZtzXm2bNmvUMqS0mGo0uxDHT/n4hnrdYLPYNUn1HVVVVJ5RxEqmMD0Egez3utXVZ3DZg24htOwKAWvHePwUB4lnKuM3EcWobGhrS/tCUKUVFRWLGrLPxvXU2ziFWC8/3sQUiKPhTbW3tUWRiANxA0wm0O4TJjqORtgUDQuYbc6+oGlB0wimv4U64F+Xvnlg3kvF6m7+mJ9qknnpQuu+ok75Zec2d+06iw+YFog62epjSSts+E2krGBA2sWhdeyGDXoJbszFjicfegTmDBw+OkpqXrFy5MohrdhupTIFCr7r8j6m5g/t6vpjJhNQWQ2tJrDA1d+Bs+baX4Igjjvg5npUupDI+gwK2O7BVZHE7BVt/bEdja3HvM56t2xBUfEZq1sHz82+Uc1wkEjkB35c34Hziddu00177EdSje0lJSdq1TNoT8sbuB8+VQ7KxMFmCw2g5iSKdFAyQbeqI9zvlxcJkQ8rGTIYzPwNOcLG9HpbTn2BLMRWpPQ1ZF5P0O6s25sfCZF99ded03P13JdRH1NFWLyMYSPo7a5I+rvprhb0OgR046WKBMPG+puusP2gIr0Teh0nNGJzjTDSsL5PqCOr08bp1605KFxD4fR2CgwcPHonyjTE+8Bmoy3twJn07hXAsj9YhwDNxG56JtN8HKO923NfHZzvQxbUaImYSITUlOL+Y6lTMb/8umXIGTpXROgS4H8Vz4tqOtRGH8cy7LuCYKbg2ebcOgdd7vK1AHf+Cv9P5KGer/3qPdr4LnOtjcX3E31RMl5vzaX7x5xSTfHSG/ApkP2ynI91NfJYJeO7OSvd9nEvwd/PPwmQbex08V1LMgMDuMApppJ2CAaRFQDDyXX8HBKJXAD7eoyjvMHvZDUl6gs1bMBDPh2OsjknSZY9M9fe6BCIg0AJyfGEyL8GAsEU1fdyhdhQQCPDgeVkkbBucmn7NdWqwf9pFm7wGHfm2MBnjnVieBAQZLhJ2A+5rT+sHZAquxfMow9mkpgT5nkC+i0jNGThPi1YqLmRwbfIqINi1a1eH7t27iwXaMnY4WwPUr3L37t3n5NsqvdlEjMGYNm3aN9C+iEH5P0j397bAtRO9HmnbjVyB8/tnYTLxn90RjDuEIp0iGLCkXxG9AvOvqL4ZwcAalDNXwYCwDZcD0ror5u+7yc9jCxLqA5m2Z4DytadXhizwBfQ3PKDrSXUED2/fioqKZjkUsVhsFPZ3DQZw/k83b96c8dLxDNMWHHPMMZfink4bDOC+3gceITXrINjwOo3pxIaGBvGrIsN4olu3blfjHvdrMPDs3r17z23PwYBAvIYIp/kV/J1EL8lZuC6f00fpGINgUPQwtHtSDyp2+MXYns+vzL24asBpHce8jlBnHsppvCJkr0cWgwHrsxLIBSVDv1l5yQJ/ji2w6pIcDIj6OAUDhsTWXmYZsiO6W7F5GUtwu3g/nlTPoMHytO7AgAEDIqQyjG9Zvnx5AM+C19WnH4BjlbPpC/FsvYhn521SU4LyBsPh8I2kMowrfl1hHfd6DN9Vdz711FPn5fK5ykdEYICgf6SXoAB/WzkYDE4gtV0D9y/RETSdQYdgwPrMchiNPf2D+IV+4WXVNweK5DUo37CE+lhlJj3B1rJgwG4broekdT9euvdGxWcL4IhyGnUXMl52x4HT9vrgqTL3b2+EQqGn0ZC4dlWjDTlh1KhRGa1+GovFhmM/165JnPezzZs3P0Yqw/ia8ePHny+eBVJTgvv6MFhGas7IoJfgipqaGl/+4sv4C1phPW0PWGuC5+k5fJ8MUhRl5oQJ/h/H2BaIGZtUVb0A1yrtBAb4+/4XJds1SszWQ2A6g+mDAcux9AsLLq3qP6zD2Nf0gDQP5StOqA+lrTok2LIXDFjXpERWpEUTu15T+YP7vvRNb4Gx8JxZvnh9kv+mTvVpT9OO2smkl0D8QkpqWjz2DtzDvQNMvoBnwOusPb8tKyvbS+mcMWvWrL/gGfqA1JSg3KUdOnT4BakM44jfVljHvf1YLBYbhjKdEwqF3iczk4JgMLga4k+m5sogMRaK0u0WuH2mI2g6gx6DAUg/IHoFFl9WfbMSUNbCyT09oZy2tFWHBFumwYDjZ5SOf4a8kKosjQiGwuvOf9AnvQXx8gnpLRgQ+drjGAILNLbCsXCdiQSN8knjx4+fSKorsVhsqGjESXUE5xO9A1lZYZJhco2qqmfjnnadkUuA+zra0NCwiNScIt4jxvkWkJqOa/bs2VNGaYZpQt++fX8IUYR7am8uN/Ns6dE07Rk4uWlfi2MaQTv1S0qmBO1YuHfv3qeQ2m6B62c5g4nBgJBOjqNhwz5Zm0S6mSy+cF+/00vHrtJleR6c14TpRBPKTHqCzS0YsKQtn/GZU35hi+ePBwPW5yXQF53X+5rKcx9s296CxjJ7DwaErT1DvQQzSU0JGpKpYnYDUlMSCAS8rDswl3sHmHxB8b7y759F9z2lc862bdsex7P0BakpwbNbDn5KKsM0Aff4H3CfdMv1hvv1JTqlKyjPHdja+bdzZsyePfsNXN99pKYE17UvJdstihoUzmDTYEBIRxt2MhzLNnq/3OgVuLT6ZikcWIfyfN3utBvls5eZdCcnP9FGaSFpH/txnZxowyakYUNeSFswYM83IhAOrzv3t23XW2CUQ/zNHMpnSCtN+SybeJ2sPTNr1qwVaEjeI9URNOYD7rjjDtcBSdFoVPyK+h1Tcwbn2Q5HhnsHmLwgFoudhns/7foSuK/FvP/zSW0VTjjhhAac1tPUpqjDjWvXrg2RyjBtgqqqaV9RFeB+rcD3Cb/vngG0CKKXdUfa/Wr6cAGTnEOSjjbktTvKrY3oFfh6ydhVkiLTWIHGshjlg4yXWeiWjdJW/kSbuZGtFrY6+3Ht+RJsQho2ONqQTsGAIc10iRTUF33r+J9Xjn2i9XsLRFmc6mErH9WnMRgQtvYOvX7gpZdgmlsvQTAYFKtb4qqmBueZKxwZUhnG1wS8r/j7rNu7zuK9Xdz7H2E7lM0Nj5tXB+uYioqKjCYHYJhsg++IlbhvXyXVFdFLQEnGO5+QTAnaArHaertGEcPTk53EBIfRshn52iYYEL0CSy+tvlkOmb0CCc6rVT5hE1LYSCbY0gQDcOhXRTWtQlP1QfhstZqUL55f2IQ0bGYw4JTPkFYa5ybbCFkOrRvzp92t2ltgDCp2LZ+QtiCIPhd/8/bOzJkzn0JD7Tp4Cw3JwGnTpv2A1ASi0ah4L/E8U3MGx/9i27ZtvyGVYXxNJBIRi+g43u/JqKo6l5KOHHPMMWIGl77YyrK8ldAp0oK8U/g1DKat8fKKqgD361A8V67j0ZgmeJmWVayw3K5RxNSSdifRnrY7hskOuJCtgegVGFE8tlKTzV4B06HPXjCArRZB0Q0PyMtG/+rurh8+cHf5ln3vvTwKTvQU5KuzzmHktY5h2DIOBixbia7Ii74x4OeVo5a3Um+BKGdy+SybIW3BAKSVbs+Dii289hLAoZjm5FRw7wBTaIRCoZtwS6d9oRD39Src/ylX4fXLDC4ow9cQuH+XVIZpEwKBwL/xzIhZcdLCvQQZ4+UF6Hbv8ShiaknLSUx2GA2b8XmSA45N/IKeS4xegYurbw4EA+vgpA43zotzegkGxGeNaWdnl7bKiK5VLJvR5V7NfM/M4MknJ6gP316+sEGVRG/B6/F9ab8WBAP2fEZvwcgVue8tSDqvIRvrkyIYgGRMZs6cuRwN9UZSHYFTId7t/B6pBtC/BjHe1JzBcb/Yvn17zlZvZZhsUltbexTEJabmjpZmTYC+fftejufmaFLbFDhYvplakmm/4Jnx+qrbcFVVx5LKpKcjSTdqSbZbFBETCScw2WE0bMjgFAwYDmMOEb0CZxSNrRRjBeCkmqsN45yuMyFZMqGczmXHVovthmUzl50pegXotE34/dTyLY/V3j9Kk/TJOD/1FmQlGDA2BFUl0BcNG3T1yiErvhDd8DlBRDr28xtlF5KDAU9k0EuQMANEMBichoZbXNGU4Ljz+vTpU08qw/iakpKSSbin087Xjfv6/VAo9CypTdi4cWMYx7mV1DYHZTkjFouNJJVh2oRAIPAcnp23SHWFewky4iskU4LrfpCS7RbDWbEcQbt0DAYg7fmyjegVWHZx9c3BgDFWYLjdSXWdCcmSdluKYECVpcqoqp66VPQKaI29AqkQPQe/n9x1cUQRvQV6Y2+B7dhxaaW9BQOQ8XwjA0WhDac9m5veAvv5jbILycFARsycOfN/0WCk6yUYEo1GzxXpSCTSD0LMYZ0SHO/L7du3P0wqw/ia/fv3d4a4ytTcwb09T0zdS2oT+vXrdymel2NJ9QUZDJRmmJyRwViCb8RisdGkMimgCT9Eb306PiPZbnEZVOwQDMQ/E3sa+2eN+ybuO2lkaGylWFcA5yi2n0s4zvayJJTTknabQzAAB1z0Cky6b86yM++f020rndYzT15XvuXPVQ+MQkAxGcdLGFtgSCudLhiATAoGrGtbogWkRacMv3rlyc9mubeAzmlcKyE5GMgY6iWYRWpKFEUx1hsIhUJT0WC7vreI483n3gEmX+jUqdNVuKdFUOAK7utP169f/ySpTRDTfOI4t5HqJ76DgP5kSjNMmyB61vAMrSXVFQSx3EuQhqlTp56O9qYLqSlBIPYRJdstzoOKkxzw5GDAkHSAliJ6BR747+qbZLGugGKOFUg8V8uDAaQrI7p66pKZXe7z0iuQCtFb8H8/77o4JkcG6ZI5tsA4vnU+ezAAaU8bZYE0pydtEgzY849UikMbvvZS9noLYvZzcTDQbFasWCF6CTaT6gganmFoWK5F8semxRkcZ8eXX375EKkM42vE9KC4tyeR6gru7UWDBw+OktqEioqKi3Cs40j1DSiTHAwGeSwB06aInjVsaX98EuCWHROLxc4glXEAQVPaxQfRZsWqq6vXk9pukV865eC5clB61nAYhXPoIRgQGxzbqee/2GkOHadZiF6BQDDwKI5rDhoW57Ckca4WBwO1qiJNvfeeZS0KBJwQzvp/9b7mej0gzUJZSpoEA/EyUVkgPQQDjTYz3yo1Grv8w7G9U45z8ELZBzuno5x3NSMYGKcfddTzlPYteJir0DAeSaoj4pe/UCj0H1KbDRrqCxVF+QOpjqA8unAuSHUEx7kBx/G0eJIbhw8f7t6hQ4ddpKakpqame1lZ2R5Sm42qquPEe66kOoLqv4/qDySVaSaxWOx0OKhvkOoIrrWYc78TqTkD9+uVuF9/TWpKUJ69O3fu7HPUUUelHKCHPAshjje1VkMENN+mdEpQtmhDQ8OJ2VhZGcfahnO6Bj74G490m4mpUMG12YNr05VUR9BmV6DN3kBqi8D5NJzPtU2ORCL9w+Gw6w8+rQWeNRlt7XoUWUxb7Qrq9i/kS3tvt0dwDw3C8/Umro/r4oO4hm8hz+mktio49wc4t+tbIbgXvo/v3b+SmjMSBxU7OODJjq3prIpdm+9fW70CxgxCuQsGjHUFFs/2NlYgU0Rvwd9+2nWxKkUGIRhYbS9nk/JBJgcDVj5DJtsa842UioMbTli1s0W9BeY5Mg4GGAdWrFjxZzzAW0h1BA+361XF/jt37drFvQNMXrB8+fIAbumbSHUF9/Yyt2BAII6F7QetvJ2Dsr1JRUgJ8oWKiopuJJVh2gTRSwC89hKMi8Viw0hliLq6ul4IBp4UzzSZUoJr/TQl2zWGk2k4oG4OuGUj3XJsm8ODE/edNDowthJ38QIcoyR+Dksa52pRMFCn69qNi+YtG33vvNQzCGWLf1zWa8tzz64chXJNwfnrkssnpFMwYMkmtqb5jHULjh131cpj32re2AJN0RrPB2mlORjInAkTJqheG+pUYP8F6ZwmhvEL4wG+VNO2Pbiva8D9pPoOOFmu06DauAL1cP31mmFyDS2K6alXm8cSJCKmZC0uLl7tsd1So9Hon0ht1yiqFDMcRJsDGpcJNtItx9ZwKDNghjJDeXBi9Y2aNYOQ/RyWNGwtCgZWRXTt1AXzui7JRa9AKrQnJ6jPX9htYb0WHYQyOvQWNDsYaEwr0khdCa4/+u1d12XcW4Dc4hj268fBQPNZsWLFn9CIfEBqRmC/XeBBUhnG9+BL1et79Q936tSpitK+Y9asWX/F85f2lRDUtwP4BakM0ybQRBazSU2HGBA/mNLtkoaGhr4I+n+Ga1aJAOkFPMdeZzFbUVRU9Aml2zXyC0OrztXlwLMpHVEhSbc7tqqiT/3xP4/wNIbg/gn7Tw0GpYew7zD7ce3HNm0ZBAOQtl4N0SswbeHCB3LyelAmKBOXB0adP3qyFpRmoMzF2QgGrM2y4dqvjqmxK/cOOfp9Oq0r4c++nK7J8l3W8TIIBngMQQrQ8FysKMrvSfUM9rsJ+y0itcX4dAzBfoi/m1r+UVdXd3NpaekOUtuMmA/GEODvPQZ/73+TmhKUI1JfX398SUnJ52TyJXj+Lsfz9xtSU4L67N29e/dXevTocZhMGYNj8BiCFODa8BgCD4jX9c4///z/oOgnkSklqONfkM91IcxMwfNyLY55JpJikgBjNnraWoLwQsRmx8lmx/rcOr9YVTiMTayJ0g3bV1BOL4uPJYBrFsUzOCibvkGmoAy+GUMg/xMBgRwIGIOKkx1RQ5LexLGV0gcEM87bUdqzuOQO7DMZ+4TsxzXSljRsOCJkE8dfpJNtRr54MPB6RNYvXzK33PW97tZm6Iod/UKK8ltNkc2Zk6jsQtrThswgGBA9IuJ6wBbF07mgqqphpjbaferKIAICPSDfJfbLsGeAA4IUrFy5MviNb3xjY7oH2Q7KuXvnzp3HZfN1IT8GBPmOWEMCjkGbtycxHwQEOP7zOP7ZpKYE+R5DvstI9S1iQbT+/fsLR703mVICZ2gSgof7SM0YXBMOCFKAa8MBgUdwH16C+/B3pKYEddRxP4lr9i6ZWgS+M7rhu+VjXLYOZCo4cMnmoX5tukAiyuCjQcVO045S2nLEU/3K7cavLqj6Vs+ikveQ91bkzUUwUKfK2uQFC5aN8lswIHh7/FGb34hVjkJZb0HZ6606WPWIy+YFA0IP4Vrc3ql70XudNn05hk7riHEc7MevCWWP0aNHx/Age+3ONUB+HjvA5A3iFQR8UXkJBjTknU+qrxkwYEAE5V1Cqiuo+41izQRSGaZNqKys/CPu2bRz5ON+FdPmTiW1xSAYuBGHLORg4I1NmzYZ6wYxJnAVk51OkqQ7BQNW2on7v7Oz20M/rH5ckZV/6QGpr+O+tmM0Mxh4vT6mD5o/v+vitn5FyA1twgT1re/2mK/L2mBVkd5MvhapggFjETHaLFtSMGBeCzN9gh5QXij7YMejygc7HH9xEXk5GMg+aKifQKPiaZE75NsDfkUqw/geOBdeV+79Wzgc3kRp31NdXf0QnsdqUlMCZ6hPRUXFj0hlmDaBfnzyOsX7BNHTQelmc+jQoXKIa0yt8MD1/LCurm68+IGATAwwVipudDpJku4YDECKdDKKosiPjD/wk3CH4k26Il/kzcn3HgyYDrFeh/8nz1u0bNSSJf7rFUjFO+f23LSh5tUzNN3WW5Di2hqrGGOz2xyDAaE32mQ9IP+kKKRvLP74i4votEyOoYba04xDyLe4Je8jM0xr0tDQcALE+abmjqqqXmfv8QXl5eWHIB4wNXcQFNwsvttIZZg2Yf369Y/jOyTtwFfcr0ooFGpxL0FZWdn1OFbG7+TnA7iO79XX15/lh3FifiO+DkHcOcVmOp0pggH6XAvQEcCvvr/nhF+Pr3pBC+qP4rPyhHzWviKdYDOPn5xP6E1sKAv+rdZUfdA9C/3dK5AK0Vvw7rge8yOyNkRTtLca62ZKcc2M6Ukh7TYjcEjKZ12jBJu4RrLcTQsojwe373hB2b69tRf+aZesWLHiD6KBIdURfP7lnj17lpHKML4nHA6LtQJsrbwzuLdXphvn4Edqa2uXoex1pKYE1+DkaDT6HVIZpk0QK3/jfr2H1HT8KBKJfJXSGXPw4EExHk+stl9w4Bo+vnv37uF+n/ygrTB6COLOqXAuDQfTdEINW5IjatmERz5j4MbwI+P3TwsFw+/h8zFO+QxJW6OtMdhIztfEpuh1cIqnfPT5y6Pm5lGvQCq2nNVz4+a9q0agbvHeAnHNmhsMCGkGA5Q25Vg9EHxX3rHjVpnfgc0pYl0CcA0ampRBKj67iXsHmHzh8OHDPSAuNTV3NO9z+/uKDh067Ib4ram5oyiK11enGCZnbN68+TF8l3xGakpEIB8KhW4nNWPKysquwzE6k1oQ4Lq9h+/pc1CvS/i7ODWNg4qxmU5n+mBAzD2F9KCjv9p7jaTIM+GQFlufJe8bP27clkkwoK1WNdErUL7wyScniNilIBC9BVu+0WN+TNKH4Hq85SUYENLQk2zi75XwOX0myVIp/r9HOuqotyHTLn/ONJ9gMFiJBsdxcBLsv4ZDwYueMHlDaWmpeF1ATOfnCu7tDXA88nbGqUgksgh1iJGaElyLkbFY7AxSGaZNoAHxXgPwC8W8/JT2zP79+zvjfp9Eal6DayV6VZ5BIPC9u+++u6LQZ8fLBopoDePOuEMwYDmacZvIL6QiT4DtZPuv00La0/Hjxm2eg4F6TdZu2VogvQKp+Hhkz40fR7ecgfrfhno3zkTkEAwYMtmWOhiwcyq+0bI6NzHTFDj9szVNuwIN0CZsouH+GPotaIh+TlkYxvdUVVWJKUyvMjV3cI/Pwz0uvhLykqKioo8h/tfU3IEzwb0ETJuzffv23+K5+4LUlMCpD4bD4dtI9UynTp1+gX1dp/D2G7geYizfQWybsf0L23wEARMOHDjQDXX5Hp7dZ8Qib5SdcUF+anTVuWjtnrUc+7izaZPxNHZItGU/GIC+Wle1y2ffV+67+YBzSe+3dg7QQtKjcOaHNXH8hUy2eQsGWkperEPAMAzDMAzDNB+4kcKZ9EEwIEv1OMctH3754qj2FgwIvhjWc+Oug0ZvwVRcn4bk6xRPC9k6wQDDMAzDMAzTDlBUmmUo7mzaZDyNjIm2rPcMvBlR9cEz7z1yfiGNFcgUbfTo2K5Te86JqNJgXOO3resUv2ZCcjDAMAzDMAzDZBG4kzZn0ybjaXyeaMtqMFCvKtItW3a8eMbc+7vkzcI2ueZARc+N+/d8MEKTknoLOBhgGIZhGIZhsowSCzQ6lpaMp5Eh0ZbFYECR3orK+pD23iuQCtFbcKB/zzlRLXYartkaKxgwVjG2XU8OBhiGYRiGYZiWALcy0WGPp2FPtDUzGIBMylcPecumnS+OmL20y0ZxfiY19f2Ofr/+iy1f1yRtKoKBhLEFHAwwDMMwDMMwLQWuZaODGXc2m9iSggFIKx0PBuK2pGCAPif5VkTRh8y4j3sFMkH0FjQc13uOGlNPw99ijbieHAwwDMMwDMMw2aDpoGIYEx1/h2DAyk+y0ZYyGKjHJ7et/M+7Z3CvQPPR+h79vr71w69LujYVaoNpZRiGYRiGYZjmA7ednHfhyCOd6NBnIRiQpLd0VR8y/f7yuS+9NDrtqpCMO/ro0TG9d+85kqoOlXR9DZkZhmEYhmEYplmYg4qF8w4lG8GAkPR5gyrpU/VN754x/VfcK5Bt9KOPfk/auXM4goI7oEZMK8MwDMMwDMNkhqJJUnW6YMDm5DfKuC0xGBAS29uqpg+e/kCXOdO5VyBn6IMHR/VevWZJqnpaTnoLVLWaUgzDMAzDMEyBomz/+31vwpE3F8FS4Nw7BAPk5CcEA6atSTDQgP1vVze9O4J7BVqPpN6CbI0tWC0de+w7lGYYhmEYhmEKFFnXdelX393TM1gcWgGHfrjd4c8oGJCkN2OSfjkHAm2L/PnnA6VA4LdInmZamoGur5Lq68/X+/bdTRaGYRiGYRimQIErL0lXP9Nt55dPLR2pStKlcO7XJjr+aYOBNaqsXRL79X3cK+ADjN6Chx46HU79ZVDXm1bPvCNp2sXSww+P5mCAYRiGYRimfWD0ECSzaOKu44Lh0DdlSR6oKtJXkK27FpCKEQDU67JWDdtnmiSvj+qxl6Y/3G0r7cb4EPmLL06E+KakKBWQx2I7EsFCsSTL9ZDC6f8E27tSNPqy3qePSDMMwzAMwzDtBkn6f9ahNS03inx4AAAAAElFTkSuQmCC";
const FAVICON_SRC = "data:image/png;base64,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";

/* ------------------------------------------------------------------ */
/* Scroll-reveal primitive                                             */
/* ------------------------------------------------------------------ */
function Reveal({ children, className = "", delay = 0, as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`mf-reveal ${visible ? "mf-reveal-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

/* ------------------------------------------------------------------ */
/* Vertical pipeline scroll-progress indicator (signature element)     */
/* ------------------------------------------------------------------ */
function PipelineTrack() {
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrollTop = h.scrollTop || document.body.scrollTop;
      const scrollHeight = h.scrollHeight - h.clientHeight;
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
      setPct(Math.min(100, Math.max(0, p)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="mf-pipeline" aria-hidden="true">
      <div className="mf-pipeline-track">
        <div className="mf-pipeline-fill" style={{ height: `${pct}%` }} />
        <div className="mf-pipeline-dot" style={{ top: `${pct}%` }} />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero terminal typing animation                                      */
/* ------------------------------------------------------------------ */
const TERMINAL_LINES = [
  { text: "metafirst init project", type: "cmd" },
  { text: "analyzing requirements...  done", type: "ok" },
  { text: "designing architecture...  done", type: "ok" },
  { text: "writing code...            done", type: "ok" },
  { text: "running tests...           128 passed", type: "ok" },
  { text: "deploying to production... done", type: "ok" },
  { text: "build successful in 2.4s", type: "success" },
];

function HeroTerminal() {
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) {
      const reset = setTimeout(() => {
        setLineIdx(0);
        setCharIdx(0);
        setDone(false);
      }, 2600);
      return () => clearTimeout(reset);
    }

    const current = TERMINAL_LINES[lineIdx];
    if (!current) return;

    if (charIdx <= current.text.length) {
      const t = setTimeout(() => setCharIdx((c) => c + 1), 22 + Math.random() * 22);
      return () => clearTimeout(t);
    }

    const next = setTimeout(() => {
      if (lineIdx + 1 < TERMINAL_LINES.length) {
        setLineIdx((i) => i + 1);
        setCharIdx(0);
      } else {
        setDone(true);
      }
    }, 260);
    return () => clearTimeout(next);
  }, [charIdx, lineIdx, done]);

  return (
    <div className="mf-terminal">
      <div className="mf-terminal-bar">
        <span className="mf-dot mf-dot-r" />
        <span className="mf-dot mf-dot-y" />
        <span className="mf-dot mf-dot-g" />
        <span className="mf-terminal-title">metafirst — zsh</span>
      </div>
      <div className="mf-terminal-body">
        {TERMINAL_LINES.map((line, i) => {
          if (i > lineIdx) return null;
          const isCurrent = i === lineIdx && !done;
          const text = isCurrent ? line.text.slice(0, charIdx) : line.text;
          return (
            <div key={i} className={`mf-tline mf-tline-${line.type}`}>
              {line.type === "cmd" ? <span className="mf-prompt">$</span> : <span className="mf-arrow">›</span>}
              <span>{text}</span>
              {isCurrent && <span className="mf-cursor" />}
              {line.type === "success" && i <= lineIdx && (charIdx >= line.text.length || i < lineIdx) && (
                <CheckCircle2 size={14} className="mf-check" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Node-graph illustration for About                                   */
/* ------------------------------------------------------------------ */
function NodeGraph() {
  const nodes = [
    [40, 40], [220, 20], [340, 90], [60, 160], [200, 190], [320, 220], [140, 260],
  ];
  const edges = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5], [3, 4], [4, 5], [3, 6], [4, 6],
  ];
  return (
    <svg viewBox="0 0 380 300" className="mf-graph" role="img" aria-label="Diagram jaringan sistem">
      <defs>
        <linearGradient id="mfGraphGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F02FC2" />
          <stop offset="50%" stopColor="#8B3FF6" />
          <stop offset="100%" stopColor="#22E6D6" />
        </linearGradient>
      </defs>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]} y1={nodes[a][1]}
          x2={nodes[b][0]} y2={nodes[b][1]}
          stroke="url(#mfGraphGrad)"
          strokeOpacity="0.35"
          strokeWidth="1.4"
          className="mf-graph-edge"
          style={{ animationDelay: `${i * 0.15}s` }}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x} cy={y} r={i % 3 === 0 ? 7 : 5}
          fill="url(#mfGraphGrad)"
          className="mf-graph-node"
          style={{ animationDelay: `${i * 0.25}s` }}
        />
      ))}
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Data                                                                 */
/* ------------------------------------------------------------------ */
const NAV_LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "product", label: "Product" },
  { id: "service", label: "Service" },
  { id: "contact", label: "Contact" },
];

const PRODUCTS = [
  {
    name: "Nexora CRM",
    tag: ["SaaS", "B2B"],
    desc: "Platform manajemen relasi pelanggan untuk tim sales yang bergerak cepat — dari prospek sampai closing dalam satu dashboard.",
    icon: Boxes,
    img: "/product_nexora.png",
  },
  {
    name: "Flowbit",
    tag: ["Automation", "Internal Tools"],
    desc: "Automasi workflow tanpa kode untuk tim operasional. Sambungkan sistem, atur pemicu, biarkan Flowbit yang bekerja.",
    icon: Code2,
    img: "/product_flowbit.png",
  },
  {
    name: "PulseMetrics",
    tag: ["Analytics", "Dashboard"],
    desc: "Dashboard analitik real-time untuk tim produk. Pantau metrik penting tanpa harus menunggu laporan mingguan.",
    icon: Smartphone,
    img: "/product_pulsemetrics.png",
  },
];

const SERVICES = [
  { title: "Web Development", desc: "Aplikasi web performa tinggi, dari landing page sampai platform skala enterprise.", icon: Code2 },
  { title: "Mobile App Development", desc: "Aplikasi iOS & Android native maupun cross-platform yang terasa cepat dan natural.", icon: Smartphone },
  { title: "UI/UX Design", desc: "Desain antarmuka yang jelas, terarah, dan enak dipakai — bukan sekadar indah dilihat.", icon: PenTool },
  { title: "Cloud & DevOps", desc: "Infrastruktur yang scalable, CI/CD otomatis, dan monitoring yang bikin tidur nyenyak.", icon: Cloud },
  { title: "Custom Software", desc: "Sistem internal yang dibangun sesuai proses bisnis Anda, bukan sebaliknya.", icon: Boxes },
  { title: "Maintenance & Support", desc: "Pemeliharaan berkelanjutan, patch keamanan, dan dukungan teknis yang responsif.", icon: LifeBuoy },
];

const PROCESS = [
  { n: "01", title: "Discover", desc: "Memahami tujuan bisnis, pengguna, dan batasan teknis sebelum menulis satu baris kode." },
  { n: "02", title: "Design", desc: "Merancang arsitektur sistem dan alur pengguna yang jelas dan bisa berkembang." },
  { n: "03", title: "Develop", desc: "Membangun dengan iterasi pendek, code review ketat, dan pengujian otomatis." },
  { n: "04", title: "Deploy", desc: "Rilis terkontrol dengan CI/CD, rollback siap, dan monitoring aktif sejak menit pertama." },
  { n: "05", title: "Support", desc: "Pemantauan berkelanjutan dan perbaikan cepat setelah produk digunakan pengguna nyata." },
];

const STATS = [
  { value: "60+", label: "Produk Diluncurkan" },
  { value: "10+", label: "Klien" },
  { value: "4", label: "Tahun Berkarya" },
  { value: "99.9%", label: "Uptime Rata-rata" },
];

const CLIENTS = [
  { name: "AU", src: "/client/client_au.png" },
  { name: "POLRI", src: "/client/client_polri.png" },
  { name: "KEMHAN", src: "/client/client_kemhan.png" },
  { name: "IPB", src: "/client/client_ipb.png" },
  { name: "KONVEKSIHUB", src: "/client/client_konveksihub.png" },
  { name: "DRX", src: "/client/client_drx.png" },
  { name: "MRT", src: "/client/client_mrt.png" },
];

/* ------------------------------------------------------------------ */
/* Main App                                                             */
/* ------------------------------------------------------------------ */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = useCallback((id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    const waMessage =
      `Halo Metafirst! 👋\n\n` +
      `Nama: ${formState.name}\n` +
      `Email: ${formState.email}\n\n` +
      `Pesan:\n${formState.message}`;

    const waUrl = `https://wa.me/6281281308864?text=${encodeURIComponent(waMessage)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");

    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setFormState({ name: "", email: "", message: "" });
  };

  return (
    <div className="mf-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');

        :root {
          --bg: #08080f;
          --bg-panel: #0f0f18;
          --bg-card: #131320;
          --border: rgba(255,255,255,0.09);
          --border-strong: rgba(255,255,255,0.16);
          --text: #f3f2f8;
          --text-muted: #9694ab;
          --text-dim: #625f77;
          --pink: #f02fc2;
          --violet: #8b3ff6;
          --cyan: #22e6d6;
          --grad: linear-gradient(90deg, var(--pink), var(--violet) 55%, var(--cyan));
          --grad-soft: linear-gradient(135deg, rgba(240,47,194,0.16), rgba(139,63,246,0.14) 55%, rgba(34,230,214,0.14));
        }

        * { box-sizing: border-box; }

        .mf-root {
          background: var(--bg);
          color: var(--text);
          font-family: 'Inter', system-ui, sans-serif;
          position: relative;
          overflow-x: hidden;
          min-height: 100vh;
        }

        .mf-root h1, .mf-root h2, .mf-root h3, .mf-root .mf-display {
          font-family: 'Space Grotesk', 'Inter', sans-serif;
        }

        .mf-mono { font-family: 'JetBrains Mono', monospace; }

        .mf-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          letter-spacing: 0.02em;
          color: var(--cyan);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }
        .mf-eyebrow::before {
          content: '';
          width: 18px;
          height: 1px;
          background: var(--grad);
        }

        .mf-grad-text {
          background: var(--grad);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .mf-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* ---------------- Reveal ---------------- */
        .mf-reveal {
          opacity: 0;
          transform: translateY(28px);
          transition: opacity 0.7s cubic-bezier(.16,.84,.44,1), transform 0.7s cubic-bezier(.16,.84,.44,1);
        }
        .mf-reveal-visible { opacity: 1; transform: translateY(0); }

        /* ---------------- Nav ---------------- */
        .mf-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 100;
          padding: 20px 0;
          transition: padding 0.3s ease, background 0.3s ease, border-color 0.3s ease;
          border-bottom: 1px solid transparent;
        }
        .mf-nav.is-scrolled {
          padding: 12px 0;
          background: rgba(8,8,15,0.82);
          backdrop-filter: blur(14px);
          border-bottom: 1px solid var(--border);
        }
        .mf-nav-inner { display: flex; align-items: center; justify-content: space-between; }
        .mf-logo { display: flex; align-items: center; gap: 10px; cursor: pointer; background: none; border: none; padding: 0; }
        .mf-logo img { height: 26px; width: auto; display: block; }
        .mf-logo-word { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 18px; letter-spacing: -0.01em; color: var(--text); }

        .mf-nav-links { display: flex; align-items: center; gap: 36px; }
        .mf-nav-link {
          background: none; border: none; cursor: pointer;
          font-size: 14.5px; color: var(--text-muted); font-family: 'Inter', sans-serif;
          font-weight: 500; padding: 4px 2px; position: relative;
          transition: color 0.25s ease;
        }
        .mf-nav-link:hover { color: var(--text); }
        .mf-nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -4px; height: 2px; width: 0;
          background: var(--grad); transition: width 0.3s ease;
        }
        .mf-nav-link:hover::after { width: 100%; }

        .mf-btn {
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 14px;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 22px;
          border-radius: 999px;
          transition: transform 0.25s ease, box-shadow 0.25s ease, opacity 0.25s ease;
        }
        .mf-btn-primary {
          background: var(--grad);
          color: #08080f;
        }
        .mf-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 30px -8px rgba(139,63,246,0.55); }
        .mf-btn-ghost {
          background: transparent;
          color: var(--text);
          border: 1px solid var(--border-strong);
        }
        .mf-btn-ghost:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-2px); }
        .mf-btn-sm { padding: 9px 16px; font-size: 13px; }

        .mf-burger { display: none; background: none; border: none; color: var(--text); cursor: pointer; }

        .mf-mobile-menu {
          position: fixed; inset: 0; z-index: 99; background: rgba(8,8,15,0.98);
          backdrop-filter: blur(10px);
          display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 28px;
          animation: mfFadeIn 0.25s ease;
        }
        .mf-mobile-menu button { font-size: 24px; font-family: 'Space Grotesk', sans-serif; background: none; border: none; color: var(--text); cursor: pointer; }
        @keyframes mfFadeIn { from { opacity: 0; } to { opacity: 1; } }

        /* ---------------- Pipeline signature ---------------- */
        .mf-pipeline {
          position: fixed;
          left: 28px;
          top: 0;
          height: 100vh;
          z-index: 60;
          display: flex;
          align-items: center;
          pointer-events: none;
        }
        .mf-pipeline-track {
          position: relative;
          width: 2px;
          height: 55vh;
          background: rgba(255,255,255,0.08);
          border-radius: 2px;
        }
        .mf-pipeline-fill {
          position: absolute; top: 0; left: 0; width: 100%;
          background: var(--grad);
          border-radius: 2px;
          transition: height 0.1s linear;
        }
        .mf-pipeline-dot {
          position: absolute; left: 50%; width: 9px; height: 9px; border-radius: 50%;
          background: var(--cyan);
          box-shadow: 0 0 12px 3px rgba(34,230,214,0.7);
          transform: translate(-50%, -50%);
          transition: top 0.1s linear;
        }
        @media (max-width: 1024px) { .mf-pipeline { display: none; } }

        /* ---------------- Hero ---------------- */
        .mf-hero {
          position: relative;
          padding: 168px 0 120px;
          overflow: hidden;
        }
        .mf-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.35;
          pointer-events: none;
        }
        .mf-blob-1 { width: 420px; height: 420px; background: var(--pink); top: -120px; right: -80px; animation: mfFloat1 14s ease-in-out infinite; }
        .mf-blob-2 { width: 380px; height: 380px; background: var(--cyan); bottom: -140px; left: -100px; animation: mfFloat2 16s ease-in-out infinite; }
        @keyframes mfFloat1 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(-30px, 40px); } }
        @keyframes mfFloat2 { 0%,100% { transform: translate(0,0); } 50% { transform: translate(30px, -30px); } }

        .mf-hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          gap: 56px;
          align-items: center;
          position: relative;
          z-index: 2;
        }
        .mf-hero h1 {
          font-size: 52px;
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 22px;
        }
        .mf-hero p.mf-lead {
          font-size: 17px;
          line-height: 1.65;
          color: var(--text-muted);
          max-width: 480px;
          margin: 0 0 36px;
        }
        .mf-hero-ctas { display: flex; gap: 14px; flex-wrap: wrap; margin-bottom: 56px; }

        .mf-stats-row { display: grid; grid-template-columns: repeat(4, auto); gap: 40px; }
        .mf-stat-value { font-family: 'Space Grotesk', sans-serif; font-weight: 700; font-size: 26px; }
        .mf-stat-label { font-size: 12.5px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; margin-top: 4px; }

        /* ---------------- Terminal ---------------- */
        .mf-terminal {
          background: linear-gradient(180deg, #0d0d16, #0a0a12);
          border: 1px solid var(--border-strong);
          border-radius: 14px;
          overflow: hidden;
          box-shadow: 0 30px 80px -30px rgba(139,63,246,0.35), 0 0 0 1px rgba(255,255,255,0.02);
        }
        .mf-terminal-bar {
          display: flex; align-items: center; gap: 8px;
          padding: 12px 16px;
          border-bottom: 1px solid var(--border);
          background: rgba(255,255,255,0.02);
        }
        .mf-dot { width: 10px; height: 10px; border-radius: 50%; }
        .mf-dot-r { background: #ff5f57; }
        .mf-dot-y { background: #febc2e; }
        .mf-dot-g { background: #28c840; }
        .mf-terminal-title { margin-left: 8px; font-family: 'JetBrains Mono', monospace; font-size: 12px; color: var(--text-dim); }
        .mf-terminal-body { padding: 22px 20px; min-height: 230px; font-family: 'JetBrains Mono', monospace; font-size: 13.5px; }
        .mf-tline { display: flex; align-items: center; gap: 9px; padding: 4px 0; color: var(--text-muted); white-space: pre; }
        .mf-tline-cmd { color: var(--text); }
        .mf-tline-success { color: var(--cyan); font-weight: 500; }
        .mf-prompt { color: var(--pink); }
        .mf-arrow { color: var(--text-dim); }
        .mf-cursor { display: inline-block; width: 7px; height: 15px; background: var(--cyan); margin-left: 2px; animation: mfBlink 1s step-end infinite; }
        .mf-check { color: var(--cyan); margin-left: 4px; }
        @keyframes mfBlink { 50% { opacity: 0; } }

        /* ---------------- Section shell ---------------- */
        .mf-section { padding: 110px 0; position: relative; }
        .mf-section-head { max-width: 620px; margin-bottom: 56px; }
        .mf-section h2 { font-size: 36px; font-weight: 700; letter-spacing: -0.01em; margin: 0 0 16px; }
        .mf-section-sub { color: var(--text-muted); font-size: 16px; line-height: 1.65; }

        .mf-alt-bg { background: linear-gradient(180deg, transparent, rgba(139,63,246,0.045) 40%, rgba(34,230,214,0.03) 100%); }

        /* ---------------- About ---------------- */
        .mf-about-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
        .mf-about-copy p { color: var(--text-muted); font-size: 15.5px; line-height: 1.75; margin-bottom: 18px; }
        .mf-about-stats { display: grid; grid-template-columns: repeat(2, 1fr); gap: 22px; margin-top: 32px; }
        .mf-about-stat { border-left: 2px solid; border-image: var(--grad) 1; padding-left: 14px; }
        .mf-graph { width: 100%; height: auto; }
        .mf-graph-node { transform-origin: center; animation: mfPulse 2.6s ease-in-out infinite; }
        .mf-graph-edge { animation: mfDash 3s ease-in-out infinite; }
        @keyframes mfPulse { 0%,100% { opacity: 0.75; transform: scale(1); } 50% { opacity: 1; transform: scale(1.18); } }
        @keyframes mfDash { 0%,100% { stroke-opacity: 0.2; } 50% { stroke-opacity: 0.55; } }

        /* ---------------- Product cards ---------------- */
        .mf-product-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .mf-card {
          background: var(--bg-card);
          border: 1px solid var(--border);
          border-radius: 20px;
          padding: 0;
          position: relative;
          overflow: hidden;
          transition: transform 0.35s ease, border-color 0.35s ease, box-shadow 0.35s ease;
        }
        .mf-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.22);
          box-shadow: 0 24px 60px -24px rgba(139,63,246,0.4);
        }
        .mf-card-img-wrap {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: 16px 16px 0 0;
          position: relative;
        }
        .mf-card-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s ease;
        }
        .mf-card:hover .mf-card-img-wrap img {
          transform: scale(1.05);
        }
        .mf-card-img-overlay {
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 60px;
          background: linear-gradient(to bottom, transparent, var(--bg-card));
        }
        .mf-card-body {
          padding: 22px 26px 28px;
        }
        .mf-card-icon {
          width: 42px; height: 42px; border-radius: 11px;
          display: flex; align-items: center; justify-content: center;
          background: var(--grad-soft);
          color: var(--cyan);
          margin-bottom: 16px;
        }
        .mf-card h3 { font-size: 19px; font-weight: 600; margin: 0 0 10px; }
        .mf-card p { color: var(--text-muted); font-size: 14.5px; line-height: 1.65; margin: 0 0 18px; }
        .mf-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 18px; }
        .mf-tag {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          padding: 4px 10px;
          border-radius: 999px;
          border: 1px solid var(--border-strong);
          color: var(--text-dim);
        }
        .mf-card-link { display: inline-flex; align-items: center; gap: 6px; font-size: 13.5px; font-weight: 600; color: var(--text); background: none; border: none; cursor: pointer; }
        .mf-card-link svg { transition: transform 0.25s ease; }
        .mf-card:hover .mf-card-link svg { transform: translate(3px, -3px); }

        /* ---------------- Services ---------------- */
        .mf-service-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-bottom: 80px; }
        .mf-service-card { background: var(--bg-panel); border: 1px solid var(--border); border-radius: 14px; padding: 26px; transition: border-color 0.3s ease, background 0.3s ease; }
        .mf-service-card:hover { border-color: var(--violet); background: var(--bg-card); }
        .mf-service-icon { color: var(--pink); margin-bottom: 16px; }
        .mf-service-card h3 { font-size: 16.5px; font-weight: 600; margin: 0 0 8px; }
        .mf-service-card p { font-size: 13.8px; color: var(--text-muted); line-height: 1.6; margin: 0; }

        .mf-process { display: grid; grid-template-columns: repeat(5, 1fr); gap: 0; position: relative; }
        .mf-process::before {
          content: '';
          position: absolute; top: 15px; left: 8%; right: 8%; height: 1px;
          background: linear-gradient(90deg, transparent, var(--border-strong) 10%, var(--border-strong) 90%, transparent);
        }
        .mf-process-step { position: relative; padding-right: 16px; }
        .mf-process-num {
          font-family: 'JetBrains Mono', monospace;
          font-size: 13px;
          color: var(--cyan);
          background: var(--bg);
          display: inline-block;
          padding-right: 10px;
          margin-bottom: 18px;
          position: relative;
          z-index: 2;
        }
        .mf-process-step h4 { font-size: 15.5px; font-weight: 600; margin: 0 0 8px; }
        .mf-process-step p { font-size: 13.2px; color: var(--text-muted); line-height: 1.6; margin: 0; }

        /* ---------------- Client logos ---------------- */
        .mf-clients { padding: 90px 0; border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
        .mf-clients-head { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; margin-bottom: 44px; }
        .mf-clients-head .mf-eyebrow { margin-bottom: 0; }
        .mf-clients-sub { color: var(--text-dim); font-size: 13.5px; font-family: 'JetBrains Mono', monospace; }

        .mf-marquee {
          position: relative;
          overflow: hidden;
          -webkit-mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
          mask-image: linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent);
        }
        .mf-marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          animation: mfMarquee 18s linear infinite;
        }
        .mf-marquee:hover .mf-marquee-track { animation-play-state: paused; }
        .mf-client-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0 56px;
          filter: grayscale(1);
          opacity: 0.55;
          transition: opacity 0.3s ease, filter 0.3s ease;
        }
        .mf-client-logo:hover {
          opacity: 1;
          filter: grayscale(0);
        }
        .mf-client-img {
          height: 52px;
          width: auto;
          max-width: 160px;
          object-fit: contain;
          display: block;
          user-select: none;
          -webkit-user-drag: none;
        }
        @keyframes mfMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mf-marquee-track { animation: none; }
        }

        /* ---------------- Contact ---------------- */
        .mf-contact-grid { display: grid; grid-template-columns: 0.85fr 1.15fr; gap: 60px; }
        .mf-contact-item { display: flex; align-items: flex-start; gap: 14px; margin-bottom: 22px; }
        .mf-contact-item svg { color: var(--cyan); margin-top: 3px; flex-shrink: 0; }
        .mf-contact-item div span { display: block; font-size: 12px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; margin-bottom: 3px; }
        .mf-contact-item div strong { font-size: 15px; font-weight: 500; color: var(--text); }
        .mf-social-row { display: flex; gap: 12px; margin-top: 28px; }
        .mf-social-btn {
          width: 40px; height: 40px; border-radius: 50%;
          border: 1px solid var(--border-strong);
          display: flex; align-items: center; justify-content: center;
          color: var(--text-muted); transition: all 0.25s ease; cursor: pointer; background: none;
        }
        .mf-social-btn:hover { border-color: var(--cyan); color: var(--cyan); transform: translateY(-3px); }

        .mf-form { background: var(--bg-card); border: 1px solid var(--border); border-radius: 18px; padding: 36px; }
        .mf-field { margin-bottom: 20px; }
        .mf-field label { display: block; font-size: 12.5px; font-family: 'JetBrains Mono', monospace; color: var(--text-dim); margin-bottom: 8px; }
        .mf-field input, .mf-field textarea {
          width: 100%;
          background: rgba(255,255,255,0.03);
          border: 1px solid var(--border-strong);
          border-radius: 10px;
          padding: 13px 14px;
          color: var(--text);
          font-family: 'Inter', sans-serif;
          font-size: 14.5px;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }
        .mf-field input:focus, .mf-field textarea:focus {
          border-color: var(--cyan);
          box-shadow: 0 0 0 3px rgba(34,230,214,0.15);
        }
        .mf-field textarea { resize: vertical; min-height: 110px; }
        .mf-success { display: flex; align-items: center; gap: 8px; color: var(--cyan); font-size: 13.5px; margin-top: 14px; }

        /* ---------------- Footer ---------------- */
        .mf-footer { border-top: 1px solid var(--border); padding: 48px 0 32px; }
        .mf-footer-inner { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 20px; }
        .mf-footer-links { display: flex; gap: 28px; flex-wrap: wrap; }
        .mf-footer-links button { background: none; border: none; color: var(--text-muted); font-size: 13.5px; cursor: pointer; }
        .mf-footer-links button:hover { color: var(--text); }
        .mf-footer-copy { font-size: 12.5px; color: var(--text-dim); font-family: 'JetBrains Mono', monospace; margin-top: 24px; }

        /* ---------------- Responsive ---------------- */
        @media (max-width: 960px) {
          .mf-nav-links { display: none; }
          .mf-burger { display: block; }
          .mf-hero-grid { grid-template-columns: 1fr; }
          .mf-hero h1 { font-size: 38px; }
          .mf-about-grid { grid-template-columns: 1fr; }
          .mf-about-grid > div:last-child { order: -1; max-width: 320px; margin: 0 auto; }
          .mf-product-grid { grid-template-columns: 1fr; }
          .mf-service-grid { grid-template-columns: 1fr 1fr; }
          .mf-process { grid-template-columns: 1fr 1fr; row-gap: 32px; }
          .mf-process::before { display: none; }
          .mf-contact-grid { grid-template-columns: 1fr; }
          .mf-stats-row { grid-template-columns: repeat(2, 1fr); row-gap: 24px; }
        }
        @media (max-width: 560px) {
          .mf-service-grid { grid-template-columns: 1fr; }
          .mf-process { grid-template-columns: 1fr; }
          .mf-hero { padding: 130px 0 80px; }
        }

        @media (prefers-reduced-motion: reduce) {
          .mf-blob, .mf-graph-node, .mf-graph-edge, .mf-cursor { animation: none !important; }
          .mf-reveal { transition: none; opacity: 1; transform: none; }
        }
      `}</style>

      <PipelineTrack />

      {/* NAV */}
      <nav className={`mf-nav ${scrolled ? "is-scrolled" : ""}`}>
        <div className="mf-container mf-nav-inner">
          <button className="mf-logo" onClick={() => scrollTo("home")} aria-label="Metafirst home">
            <img src={LOGO_SRC} alt="Metafirst" />
          </button>
          <div className="mf-nav-links">
            {NAV_LINKS.map((l) => (
              <button key={l.id} className="mf-nav-link" onClick={() => scrollTo(l.id)}>
                {l.label}
              </button>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <button className="mf-btn mf-btn-primary mf-btn-sm" style={{ display: "none" }} />
            <button className="mf-btn mf-btn-primary" onClick={() => scrollTo("contact")}>
              Start a Project <ArrowRight size={15} />
            </button>
            <button className="mf-burger" onClick={() => setMenuOpen(true)} aria-label="Buka menu">
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mf-mobile-menu">
          <button style={{ position: "absolute", top: 26, right: 26 }} onClick={() => setMenuOpen(false)} aria-label="Tutup menu">
            <X size={26} />
          </button>
          {NAV_LINKS.map((l) => (
            <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section id="home" className="mf-hero">
        <div className="mf-blob mf-blob-1" />
        <div className="mf-blob mf-blob-2" />
        <div className="mf-container mf-hero-grid">
          <div>
            <div className="mf-eyebrow">// software_development_studio</div>
            <h1>
              Kami mengubah ide produk menjadi<br /> <span className="mf-grad-text">software yang benar-benar rilis.</span>
            </h1>
            <p className="mf-lead">
              Metafirst adalah perusahaan pengembangan software yang membantu startup dan enterprise merancang, membangun, dan menskalakan produk web, mobile, dan cloud — dari commit pertama sampai production.
            </p>
            <div className="mf-hero-ctas">
              <button className="mf-btn mf-btn-primary" onClick={() => scrollTo("contact")}>
                Start a Project <ArrowRight size={16} />
              </button>
              <button className="mf-btn mf-btn-ghost" onClick={() => scrollTo("product")}>
                See Our Work
              </button>
            </div>
            <div className="mf-stats-row">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="mf-stat-value mf-grad-text">{s.value}</div>
                  <div className="mf-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
          <Reveal delay={150}>
            <HeroTerminal />
          </Reveal>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mf-section mf-alt-bg">
        <div className="mf-container mf-about-grid">
          <Reveal>
            <div className="mf-about-copy">
              <div className="mf-eyebrow">// about_us</div>
              <h2>Kembangkan bisnis tanpa rasa khawatir.</h2>
              <p>
                Metafirst dijalankan oleh tim engineer senior, telah mampu beradaptasi dengan perubahan besar dalam teknologi baru. Kami membantu perusahaan Anda untuk membangun dan mencapai tujuan transformasi digital dalam meningkatkan produktivitas sejalan dengan teknologi terbaru.
              </p>
              <p>
                Dari riset kebutuhan, desain sistem, sampai deployment ke production — satu tim yang sama mengawal produk Anda dari awal hingga digunakan pengguna nyata, remote-first dan berbasis kepercayaan.
              </p>
              <div className="mf-about-stats">
                <div className="mf-about-stat">
                  <div className="mf-stat-value">2022</div>
                  <div className="mf-stat-label">Didirikan</div>
                </div>
                <div className="mf-about-stat">
                  <div className="mf-stat-value">10+</div>
                  <div className="mf-stat-label">Engineer Inti</div>
                </div>
                <div className="mf-about-stat">
                  <div className="mf-stat-value">10+</div>
                  <div className="mf-stat-label">Klien</div>
                </div>
                <div className="mf-about-stat">
                  <div className="mf-stat-value">60+</div>
                  <div className="mf-stat-label">Produk Rilis</div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div>
              <NodeGraph />
            </div>
          </Reveal>
        </div>
      </section>

      {/* PRODUCT */}
      <section id="product" className="mf-section">
        <div className="mf-container">
          <Reveal>
            <div className="mf-section-head">
              <div className="mf-eyebrow">// our_products</div>
              <h2>Produk yang kami bangun dapat disesuaikan dengan kebutuhan Anda.</h2>
              <p className="mf-section-sub">
                Selain mengerjakan proyek klien, kami juga membangun produk sendiri yang sudah siap digunakan — hal ini agar produk-produk kami selalu bisa membantu kebutuhan dari klien.
              </p>
            </div>
          </Reveal>
          <div className="mf-product-grid">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 120}>
                <div className="mf-card">
                  {p.img && (
                    <div className="mf-card-img-wrap">
                      <img src={p.img} alt={p.name} loading="lazy" />
                      <div className="mf-card-img-overlay" />
                    </div>
                  )}
                  <div className="mf-card-body">
                    <div className="mf-card-icon">
                      <p.icon size={22} />
                    </div>
                    <h3>{p.name}</h3>
                    <p>{p.desc}</p>
                    <div className="mf-tags">
                      {p.tag.map((t) => (
                        <span key={t} className="mf-tag">{t}</span>
                      ))}
                    </div>
                    <button className="mf-card-link">
                      Explore product <ArrowUpRight size={15} />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE */}
      <section id="service" className="mf-section mf-alt-bg">
        <div className="mf-container">
          <Reveal>
            <div className="mf-section-head">
              <div className="mf-eyebrow">// what_we_do</div>
              <h2>Full-cycle software development.</h2>
              <p className="mf-section-sub">
                Dari layar pertama sampai server terakhir. Kami menangani seluruh siklus pengembangan supaya Anda hanya perlu fokus pada satu hal: menjalankan bisnis.
              </p>
            </div>
          </Reveal>
          <div className="mf-service-grid">
            {SERVICES.map((s, i) => (
              <Reveal key={s.title} delay={i * 90}>
                <div className="mf-service-card">
                  <div className="mf-service-icon"><s.icon size={24} /></div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mf-process">
              {PROCESS.map((step) => (
                <div key={step.n} className="mf-process-step">
                  <div className="mf-process-num">{step.n}</div>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENT LOGOS */}
      <section id="clients" className="mf-clients">
        <div className="mf-container">
          <Reveal>
            <div className="mf-clients-head">
              <div className="mf-eyebrow">// trusted_by</div>
              <div className="mf-clients-sub">10+ tim sudah membangun bersama Metafirst</div>
            </div>
          </Reveal>
        </div>
        <Reveal delay={100}>
          <div className="mf-marquee">
            <div className="mf-marquee-track">
              {[...CLIENTS, ...CLIENTS, ...CLIENTS, ...CLIENTS].map((client, i) => (
                <div className="mf-client-logo" key={`${client.name}-${i}`}>
                  <img
                    src={client.src}
                    alt={client.name}
                    className="mf-client-img"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mf-section">
        <div className="mf-container mf-contact-grid">
          <Reveal>
            <div>
              <div className="mf-eyebrow">// lets_talk</div>
              <h2 style={{ marginBottom: 18 }}>Punya proyek yang ingin dibangun?</h2>
              <p className="mf-section-sub" style={{ marginBottom: 36 }}>
                Ceritakan tantangan yang Anda hadapi. Kami akan balas dalam 1x24 jam kerja dengan langkah awal yang jelas.
              </p>

              <div className="mf-contact-item">
                <Mail size={19} />
                <div><span>Email</span><strong>info@metafirst.id</strong></div>
              </div>
              <div className="mf-contact-item">
                <Phone size={19} />
                <div><span>Telepon</span><strong>+62 812 8130 8864</strong></div>
              </div>
              <div className="mf-contact-item">
                <MapPin size={19} />
                <div><span>Studio</span><strong>Tangerang Selatan - Banten 15223, Indonesia</strong></div>
              </div>

              <div className="mf-social-row">
                <a href="https://www.instagram.com/metafirst.id/" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="Instagram"><Instagram size={17} /></a>
                <a href="https://web.facebook.com/profile.php?id=100090763646915" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="Facebook"><Facebook size={17} /></a>
                <a href="https://x.com/metafirst_id" target="_blank" rel="noopener noreferrer" className="mf-social-btn" aria-label="X"><Twitter size={17} /></a>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <form className="mf-form" onSubmit={handleSubmit}>
              <div className="mf-field">
                <label>Nama</label>
                <input
                  type="text"
                  placeholder="Nama lengkap Anda"
                  value={formState.name}
                  onChange={(e) => setFormState((f) => ({ ...f, name: e.target.value }))}
                />
              </div>
              <div className="mf-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="nama@perusahaan.com"
                  value={formState.email}
                  onChange={(e) => setFormState((f) => ({ ...f, email: e.target.value }))}
                />
              </div>
              <div className="mf-field">
                <label>Pesan</label>
                <textarea
                  placeholder="Ceritakan singkat tentang proyek Anda..."
                  value={formState.message}
                  onChange={(e) => setFormState((f) => ({ ...f, message: e.target.value }))}
                />
              </div>
              <button type="submit" className="mf-btn mf-btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Send Message <Send size={15} />
              </button>
              {sent && (
                <div className="mf-success">
                  <CheckCircle2 size={16} /> Pesan terkirim. Kami akan segera menghubungi Anda.
                </div>
              )}
            </form>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="mf-footer">
        <div className="mf-container">
          <div className="mf-footer-inner">
            <button className="mf-logo" onClick={() => scrollTo("home")}>
              <img src={LOGO_SRC} alt="Metafirst" style={{ height: 22 }} />
            </button>
            <div className="mf-footer-links">
              {NAV_LINKS.map((l) => (
                <button key={l.id} onClick={() => scrollTo(l.id)}>{l.label}</button>
              ))}
            </div>
          </div>
          <div className="mf-footer-copy">© 2026 Metafirst. All rights reserved. Built for shipping software, not just showing it.</div>
        </div>
      </footer>
    </div>
  );
}
