import { Component } from '@angular/core';

@Component({
  selector: 'app-lektion4',
  standalone: true,
  imports: [],
  templateUrl: './lektion4.component.html',
  styleUrl: './lektion4.component.scss'
})
export class Lektion4Component {
 /*  constructor() {
    console.log(this.hittaHogstaOchLagsta([-10, 20, 30, -40, 0]));
    console.log(this.selectionSort([64, 34, 25, 12, 22, 11, 90]));
    console.log(this.insertionSort([64, 34, 25, 12, 22, 11, 90]));
    console.log(this.linearSearch([10, 20, 80, 30, 60, 50, 110, 100, 130, 170], 110));
    console.log(this.binarySearch([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 60));
  }


  hittaHogstaOchLagsta(talArray) {
    if (talArray.length === 0) {
      throw new Error("Arrayen kan inte vara tom");
    }
  
    let högsta = talArray[0];
    let lägsta = talArray[0];
  
    for (let tal of talArray) {
      if (tal > högsta) {
        högsta = tal;
      }
      if (tal < lägsta) {
        lägsta = tal;
      }
    }

    
  
    return { högsta, lägsta };
  }

  selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let min_index = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[min_index]) {
                min_index = j;
            }
        }
        if (min_index != i) {
            [arr[i], arr[min_index]] = [arr[min_index], arr[i]];
        }
    }
    return arr;
}

insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let current = arr[i];
        let j = i - 1;
        while ((j > -1) && (current < arr[j])) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = current;
    }
    return arr;
}

linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === x) {
          return i;
      }
  }
  return -1;
}

binarySearch(arr, x) {
  let start = 0, end = arr.length - 1;
  while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] === x) {
          return mid;
      } else if (arr[mid] < x) {
          start = mid + 1;
      } else {
          end = mid - 1;
      }
  }
  return -1;
}
 */

  
}
