// region of interest
var roi = ee.Geometry.Point([145.77174443724158, -16.930452933843192]);

// train data
var urban = ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([145.7627595074986, -16.940629997529534]),
        {
          "landcover": 0,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73340569492885, -16.938779169923205]),
        {
          "landcover": 0,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([145.69100405265218, -16.95086909637216]),
        {
          "landcover": 0,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7747120071248, -16.92225864318687]),
        {
          "landcover": 0,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73851210541184, -16.906112455247253]),
        {
          "landcover": 0,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7274141303366, -16.906625592418617]),
        {
          "landcover": 0,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([145.69556119571067, -16.901705225288985]),
        {
          "landcover": 0,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([145.71490734593104, -16.900462906906746]),
        {
          "landcover": 0,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([145.71574285403918, -16.891889076466317]),
        {
          "landcover": 0,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73123115313746, -16.87713354226145]),
        {
          "landcover": 0,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7157586994678, -16.881832738125382]),
        {
          "landcover": 0,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([145.67970382184566, -16.86771887704307]),
        {
          "landcover": 0,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([145.68859251059902, -16.83598681243257]),
        {
          "landcover": 0,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([145.70398119710677, -16.805860514896157]),
        {
          "landcover": 0,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([145.72052961997048, -16.811534849957674]),
        {
          "landcover": 0,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6760792770881, -16.79573189306468]),
        {
          "landcover": 0,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([145.67048774761912, -16.76393558228968]),
        {
          "landcover": 0,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([145.66887750543953, -16.747041364714214]),
        {
          "landcover": 0,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([145.68232000884433, -16.782647784542164]),
        {
          "landcover": 0,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6980865677802, -16.78576951235816]),
        {
          "landcover": 0,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([145.69303811606784, -16.795071391651746]),
        {
          "landcover": 0,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7402333399869, -16.840687864146926]),
        {
          "landcover": 0,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([145.76227549178458, -16.90593316292346]),
        {
          "landcover": 0,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73704206041458, -16.921222127024766]),
        {
          "landcover": 0,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([145.74736980145263, -16.922629288626588]),
        {
          "landcover": 0,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73098580009702, -16.95974327620979]),
        {
          "landcover": 0,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([145.75229369284517, -16.97292436324962]),
        {
          "landcover": 0,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73293505999044, -16.994506359697535]),
        {
          "landcover": 0,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73772867565293, -17.006824316909]),
        {
          "landcover": 0,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([145.71919882850506, -17.019183041135854]),
        {
          "landcover": 0,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73779305390798, -17.024049609466235]),
        {
          "landcover": 0,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Point([145.74586801702407, -17.030295402288633]),
        {
          "landcover": 0,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Point([145.76984115792447, -17.093294597147057]),
        {
          "landcover": 0,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Point([145.782802105276, -17.097417262982898]),
        {
          "landcover": 0,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Point([145.77588809337476, -17.098890342196658]),
        {
          "landcover": 0,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7701005516342, -17.1196014547114]),
        {
          "landcover": 0,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.7643233950306, -16.912131929011558],
              [145.76326023443232, -16.918976825991514],
              [145.7607944042478, -16.92658306262234],
              [145.7527902734522, -16.93034789579875],
              [145.75476611853207, -16.940601505982638],
              [145.76949951360564, -16.933249904773675],
              [145.77047843607704, -16.921955969954663]]]),
        {
          "landcover": 0,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.73246178504553, -16.930254789053013],
              [145.73796109932948, -16.925342601796537],
              [145.73229906087283, -16.92502819533622]]]),
        {
          "landcover": 0,
          "system:index": "37"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.724380595773, -16.955209100182728],
              [145.72650274500822, -16.96356570544376],
              [145.73428341033625, -16.96112143744899],
              [145.73657505409548, -16.956647144323927]]]),
        {
          "landcover": 0,
          "system:index": "38"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.71307065459848, -17.01279523072583],
              [145.71366158401077, -17.014070359679433],
              [145.71591644169246, -17.012891889126927],
              [145.7164607153362, -17.01174129386819],
              [145.71540326229012, -17.01098104142873]]]),
        {
          "landcover": 0,
          "system:index": "39"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.73660049072006, -17.007054602711754],
              [145.73318710471742, -17.008478477004054],
              [145.73233958953298, -17.0118503731814],
              [145.73335038681054, -17.011733266840032],
              [145.73361863914417, -17.010197890581736],
              [145.73532338728202, -17.008915302347557],
              [145.7367501679366, -17.00842828749851]]]),
        {
          "landcover": 0,
          "system:index": "40"
        })]);

var agriculture = ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([145.82154965829014, -17.048838137802615]),
        {
          "landcover": 1,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([145.82406988702624, -17.022476908890145]),
        {
          "landcover": 1,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7802123540072, -17.034539012033253]),
        {
          "landcover": 1,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([145.78943672226652, -17.07021319149744]),
        {
          "landcover": 1,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([145.82463665036394, -17.080876555010796]),
        {
          "landcover": 1,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([145.81519391257225, -17.110910890903508]),
        {
          "landcover": 1,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([145.73769417577333, -17.148618426251673]),
        {
          "landcover": 1,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([145.55833822976888, -17.21704461237802]),
        {
          "landcover": 1,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([145.50978035726325, -17.20118638877417]),
        {
          "landcover": 1,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([145.52234330499138, -17.253263680019877]),
        {
          "landcover": 1,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([145.50911479157455, -17.29136073930654]),
        {
          "landcover": 1,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([145.4841427760484, -17.297705098219193]),
        {
          "landcover": 1,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([145.52921517643804, -17.338247850295332]),
        {
          "landcover": 1,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([145.3252771025004, -17.068747091932778]),
        {
          "landcover": 1,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([145.29932088390385, -17.080753417507324]),
        {
          "landcover": 1,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([145.28939692009632, -17.114296714781975]),
        {
          "landcover": 1,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([145.46995522626136, -17.182947407727085]),
        {
          "landcover": 1,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([145.42336132627315, -16.932725315119413]),
        {
          "landcover": 1,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([145.32633337907828, -16.955198677564766]),
        {
          "landcover": 1,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([145.72230931027937, -16.856155081432856]),
        {
          "landcover": 1,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([145.72230931027937, -16.856155081432856]),
        {
          "landcover": 1,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([145.70691977982554, -16.839578833643962]),
        {
          "landcover": 1,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([145.72424056363437, -16.832056076244086]),
        {
          "landcover": 1,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([145.69980920181754, -16.86084944966179]),
        {
          "landcover": 1,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Point([145.40100734840823, -16.91487104086892]),
        {
          "landcover": 1,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Point([145.41859689270356, -16.866528568519282]),
        {
          "landcover": 1,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Point([145.39251487533178, -16.957605036274362]),
        {
          "landcover": 1,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Point([145.32697709137423, -16.995129957341526]),
        {
          "landcover": 1,
          "system:index": "27"
        }),
    ee.Feature(
        ee.Geometry.Point([145.36040364712093, -16.998609029659303]),
        {
          "landcover": 1,
          "system:index": "28"
        }),
    ee.Feature(
        ee.Geometry.Point([145.29163813061874, -17.020731201255575]),
        {
          "landcover": 1,
          "system:index": "29"
        }),
    ee.Feature(
        ee.Geometry.Point([145.29608839733388, -17.04265560301977]),
        {
          "landcover": 1,
          "system:index": "30"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.75578586828863, -17.00728685130395],
              [145.75295174775613, -17.01003234761404],
              [145.75182431891528, -17.013398640324354],
              [145.7533444032489, -17.013973005126285],
              [145.75492085850067, -17.013000858967455],
              [145.75684526226917, -17.011342810968202],
              [145.7576966645612, -17.00909549951453]]]),
        {
          "landcover": 1,
          "system:index": "31"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.7659286266282, -17.0166703228592],
              [145.7694936334012, -17.02286358785184],
              [145.77134806137494, -17.02940607333517],
              [145.77839254283774, -17.029078952992005],
              [145.78159599621742, -17.024246447344485],
              [145.7838547410067, -17.016566231295045],
              [145.7831899513114, -17.012160930276163],
              [145.77955884799323, -17.015428669204415]]]),
        {
          "landcover": 1,
          "system:index": "32"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.8228157862179, -17.01397301546151],
              [145.8228157862179, -17.01752631153955],
              [145.82637018464467, -17.01752631153955],
              [145.82637018464467, -17.01397301546151]]], null, false),
        {
          "landcover": 1,
          "system:index": "33"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.81288506450093, -16.99428559578337],
              [145.81304836492947, -17.000546518961038],
              [145.8185688539963, -17.00891144421444]]]),
        {
          "landcover": 1,
          "system:index": "34"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.81764358618258, -16.99787710212026],
              [145.81866216553337, -17.002323640941306],
              [145.82108030268884, -16.997438392386755]]]),
        {
          "landcover": 1,
          "system:index": "35"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.80976381274627, -17.03281342359831],
              [145.80628044571017, -17.03724797559921],
              [145.80678584303928, -17.04297222262994],
              [145.81033530138188, -17.048016101448905],
              [145.81506661331036, -17.049056829443856],
              [145.8199650970589, -17.042195371940206],
              [145.81785797042062, -17.036099389619654]]]),
        {
          "landcover": 1,
          "system:index": "36"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.7706070566444, -17.036385608267867],
              [145.77014830984513, -17.041321873105417],
              [145.77130683947576, -17.047562638972607],
              [145.77391158922796, -17.053899837372242],
              [145.77774873282283, -17.056289702043202],
              [145.78699364460294, -17.050603038037224]]]),
        {
          "landcover": 1,
          "system:index": "37"
        })]);

var water = ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([145.65428997629206, -16.650928499874855]),
        {
          "landcover": 2,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([145.83046769031208, -16.682548156936946]),
        {
          "landcover": 2,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([145.81185701542418, -16.85234331435535]),
        {
          "landcover": 2,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([145.77241395839374, -16.741593884034707]),
        {
          "landcover": 2,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([145.87102922850173, -16.750498774528904]),
        {
          "landcover": 2,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([145.61638055608492, -16.68847788289642]),
        {
          "landcover": 2,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([145.3154846491001, -16.799732477734192]),
        {
          "landcover": 2,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([145.3560135397769, -16.830159256676286]),
        {
          "landcover": 2,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([145.24243324727712, -17.004170911232528]),
        {
          "landcover": 2,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([145.56171357643748, -17.16781001837538]),
        {
          "landcover": 2,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([145.56977708253967, -17.185333262990774]),
        {
          "landcover": 2,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7892669419407, -16.977387198220345]),
        {
          "landcover": 2,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([145.78312516525602, -16.943704476561507]),
        {
          "landcover": 2,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([145.77252193201548, -16.98279677579376]),
        {
          "landcover": 2,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([145.30190678742932, -16.88627241548037]),
        {
          "landcover": 2,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([144.80958487756504, -16.82150411728195]),
        {
          "landcover": 2,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([142.97153625422655, -16.938973600786653]),
        {
          "landcover": 2,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([144.40512472320071, -17.1191835023012]),
        {
          "landcover": 2,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([144.4058594913101, -17.11893828202196]),
        {
          "landcover": 2,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([144.38420898303113, -17.11541969502035]),
        {
          "landcover": 2,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([144.3873463451043, -17.12375346859408]),
        {
          "landcover": 2,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([144.38775844137373, -17.11272962462848]),
        {
          "landcover": 2,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Point([144.31887943075955, -17.1103507873834]),
        {
          "landcover": 2,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Point([144.31701829279424, -17.139271888514077]),
        {
          "landcover": 2,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.6942002277482, -16.98822648587356],
              [145.69492333715417, -16.986293073966543],
              [145.69288230182238, -16.985222256573376],
              [145.6927928878703, -16.987174264583302]]]),
        {
          "landcover": 2,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.67631586740606, -16.98373597781838],
              [145.6751728875155, -16.98154968370256],
              [145.67349340819635, -16.98214088038209],
              [145.67297245981752, -16.984297417023853]]]),
        {
          "landcover": 2,
          "system:index": "25"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.7708049420495, -16.966142603402886],
              [145.77041617366433, -16.96900211856913],
              [145.77120925886504, -16.97177978065646],
              [145.7737751323026, -16.97329316480326]]]),
        {
          "landcover": 2,
          "system:index": "26"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.79248267055902, -16.965737288423224],
              [145.78847835252475, -16.97156783480273],
              [145.79023169998493, -16.974007089129184],
              [145.79273536922358, -16.97018830195388],
              [145.79466365748033, -16.966075675633007]]]),
        {
          "landcover": 2,
          "system:index": "27"
        })]);
var forest = ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Point([145.61029585557003, -16.71790031591037]),
        {
          "landcover": 3,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Point([145.57917835436706, -16.708249334288244]),
        {
          "landcover": 3,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([145.67423515034784, -16.840495770035933]),
        {
          "landcover": 3,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6614610880049, -16.919169047931607]),
        {
          "landcover": 3,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6275388134079, -16.95824598982491]),
        {
          "landcover": 3,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([145.8489901460978, -16.927777644020075]),
        {
          "landcover": 3,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6635632952946, -17.022134966931738]),
        {
          "landcover": 3,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6130154528926, -17.085069690931448]),
        {
          "landcover": 3,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6539964005622, -17.089489802401626]),
        {
          "landcover": 3,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Point([145.71010972189632, -17.080503392224816]),
        {
          "landcover": 3,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6513753584857, -17.122323918531627]),
        {
          "landcover": 3,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Point([145.45504369356584, -17.34291051684919]),
        {
          "landcover": 3,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Point([145.42065794163298, -17.284354992098127]),
        {
          "landcover": 3,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7008363404582, -17.244878070313526]),
        {
          "landcover": 3,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Point([145.79395480037581, -17.19451696422746]),
        {
          "landcover": 3,
          "system:index": "14"
        }),
    ee.Feature(
        ee.Geometry.Point([145.7364555732618, -17.31442852471401]),
        {
          "landcover": 3,
          "system:index": "15"
        }),
    ee.Feature(
        ee.Geometry.Point([145.4658691961961, -17.438544150240425]),
        {
          "landcover": 3,
          "system:index": "16"
        }),
    ee.Feature(
        ee.Geometry.Point([145.69272613895035, -17.460619738338774]),
        {
          "landcover": 3,
          "system:index": "17"
        }),
    ee.Feature(
        ee.Geometry.Point([145.70400691344145, -17.616374990701754]),
        {
          "landcover": 3,
          "system:index": "18"
        }),
    ee.Feature(
        ee.Geometry.Point([145.5962219879471, -17.678772465993244]),
        {
          "landcover": 3,
          "system:index": "19"
        }),
    ee.Feature(
        ee.Geometry.Point([145.61412467566882, -17.863878403207643]),
        {
          "landcover": 3,
          "system:index": "20"
        }),
    ee.Feature(
        ee.Geometry.Point([145.6567730562911, -17.69118539361836]),
        {
          "landcover": 3,
          "system:index": "21"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.70444584704123, -17.006014840122987],
              [145.70796985321098, -16.998990435713534],
              [145.7049452355935, -16.99499741878554],
              [145.69887267247427, -17.002552116732616]]]),
        {
          "landcover": 3,
          "system:index": "22"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.82593718257215, -16.960553328406863],
              [145.82462314113457, -16.96758882265457],
              [145.82673804198805, -16.97616344618067],
              [145.83424125977274, -16.979063710651417],
              [145.83994839286845, -16.971076728283176],
              [145.8378801477835, -16.962189514890714]]]),
        {
          "landcover": 3,
          "system:index": "23"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.63932315057593, -17.026623466187925],
              [145.63629075088522, -17.037693291653973],
              [145.6425110476672, -17.045075283788794],
              [145.65253349621764, -17.045194227441183],
              [145.65444623866335, -17.036659938454633],
              [145.64771276771774, -17.029768285066254]]]),
        {
          "landcover": 3,
          "system:index": "24"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[145.66577817877737, -16.947387958206345],
              [145.6645341157539, -16.954870199511497],
              [145.67189739242644, -16.956498999242786],
              [145.6735224443812, -16.949946528106352]]]),
        {
          "landcover": 3,
          "system:index": "25"
        })]);

var GrassAndBushes = ee.FeatureCollection(
    [ee.Feature(
        ee.Geometry.Polygon(
            [[[143.98349119615503, -17.372110998318952],
              [143.9914376175473, -17.39333313509809],
              [144.0116846704366, -17.39900184454535],
              [144.03261596951396, -17.38914824791354],
              [144.06813188488357, -17.37468305672862],
              [144.06988910897397, -17.35906191635605],
              [144.05354528836668, -17.347818331346115],
              [144.04456473919325, -17.35613790225948],
              [144.02861745594763, -17.364679737806696],
              [144.011060679655, -17.362505363803354],
              [143.99885334921763, -17.35716205351937]]]),
        {
          "landcover": 4,
          "system:index": "0"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[144.00597870507525, -17.21408691234894],
              [143.993880239844, -17.297845947294036],
              [144.02348883607672, -17.29875164265806],
              [144.02911820606576, -17.28078536436182],
              [144.0351829949698, -17.26473300924975],
              [144.04236742802212, -17.229490152906685],
              [144.03731344425367, -17.214101774304616]]]),
        {
          "landcover": 4,
          "system:index": "1"
        }),
    ee.Feature(
        ee.Geometry.Point([144.3368954748066, -17.141492293102274]),
        {
          "landcover": 4,
          "system:index": "2"
        }),
    ee.Feature(
        ee.Geometry.Point([144.33230800943326, -17.134481918233195]),
        {
          "landcover": 4,
          "system:index": "3"
        }),
    ee.Feature(
        ee.Geometry.Point([144.36895332077162, -17.140838447606644]),
        {
          "landcover": 4,
          "system:index": "4"
        }),
    ee.Feature(
        ee.Geometry.Point([144.3960371860297, -17.096733592177145]),
        {
          "landcover": 4,
          "system:index": "5"
        }),
    ee.Feature(
        ee.Geometry.Point([144.4006586727622, -17.096434461117394]),
        {
          "landcover": 4,
          "system:index": "6"
        }),
    ee.Feature(
        ee.Geometry.Point([144.39849420211917, -17.093932700780805]),
        {
          "landcover": 4,
          "system:index": "7"
        }),
    ee.Feature(
        ee.Geometry.Point([144.392845397247, -17.094280143371563]),
        {
          "landcover": 4,
          "system:index": "8"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[144.40935353322422, -17.098386372176382],
              [144.40839716331104, -17.099338563712728],
              [144.40881897603978, -17.100773811122085],
              [144.41030018405874, -17.101937791947446],
              [144.41152383321898, -17.102491447008827],
              [144.4120350651385, -17.101427796221],
              [144.41013593018872, -17.098588887345883]]]),
        {
          "landcover": 4,
          "system:index": "9"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[144.44106445523377, -17.07766603580643],
              [144.4371981557126, -17.084782605714867],
              [144.4593696176091, -17.087344874283147],
              [144.46293851148968, -17.0780488154581],
              [144.44399188206464, -17.07578929832016]]]),
        {
          "landcover": 4,
          "system:index": "10"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[144.5661183385452, -17.50448156504517],
              [144.51787996192405, -17.492171627830036],
              [144.50590588937456, -17.550510347382648],
              [144.5381892085349, -17.589175001552043],
              [144.58698743342364, -17.597150034639995],
              [144.60465309063846, -17.552497142501867]]]),
        {
          "landcover": 4,
          "system:index": "11"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[144.277765026255, -17.658892454292953],
              [144.38450628955331, -17.69431490984203],
              [144.40907645568666, -17.633710659008294],
              [144.35639055742365, -17.622861948933398],
              [144.28535478718993, -17.643876975064842]]]),
        {
          "landcover": 4,
          "system:index": "12"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[144.18908381206057, -17.542361480933735],
              [144.17576460645142, -17.56003517736493],
              [144.17338534299125, -17.573444985863475],
              [144.19482203677836, -17.58683155791009],
              [144.2050870576605, -17.60185331779296],
              [144.2161203034885, -17.612354950862375],
              [144.24561228125467, -17.607159795796115],
              [144.25272673589288, -17.57897291355391],
              [144.2402239433687, -17.562539042857022],
              [144.21501439142438, -17.544668673182034]]]),
        {
          "landcover": 4,
          "system:index": "13"
        }),
    ee.Feature(
        ee.Geometry.Polygon(
            [[[144.75168037566738, -16.70041352169563],
              [144.7397451899099, -16.70861299871525],
              [144.74217110651927, -16.72145888773601],
              [144.75136937562758, -16.72527897323857],
              [144.7612440852766, -16.714064227850628],
              [144.76031881746286, -16.70132211390027]]]),
        {
          "landcover": 4,
          "system:index": "14"
        })]);


// Script
var image = ee.Image(ee.ImageCollection('LANDSAT/LC08/C01/T1_SR')
    .filterBounds(roi)
    .filterDate('2016-05-01', '2016-06-30')
    .sort('CLOUD_COVER')
    .first());
//Map.addLayer(image, {bands: ['B4', 'B3', 'B2'],min:0, max: 3000}, 'True colour image');
var classNames = urban.merge(water).merge(forest).merge(agriculture);

var bands = ['B2', 'B3', 'B4', 'B5', 'B6', 'B7'];
//with the code below we select reflectance values for each one of the points created
var training = image.select(bands).sampleRegions({
  collection: classNames,
  properties: ['landcover'],
  scale: 30
});

//training the model using the cart dataset
var classifier = ee.Classifier.smileCart().train({
  features: training,
  classProperty: 'landcover',
  inputProperties: bands
});

//apply it for the full image
var classified = image.select(bands).classify(classifier);


//Display classification
//Map.centerObject(classNames, 11);
Map.addLayer(image, {bands: ['B4', 'B3', 'B2'],min:0, max: 3000}, 'True colour image');
Map.addLayer(classified,
{min: 0, max: 3, palette: ['red', 'yellow', 'blue','green', 'orange']},
'classification');

Map.centerObject(classified)
