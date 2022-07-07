function list_child_processes(){
    local ppid=$1;
    local current_children=$(pgrep -P $ppid);
    local local_child;
    if [ $? -eq 0 ];
    then
        for current_child in $current_children
        do
          local_child=$current_child;
          list_child_processes $local_child;
          echo $local_child;
        done;
    else
      return 0;
    fi;
}

ps 60163;
while [ $? -eq 0 ];
do
  sleep 1;
  ps 60163 > /dev/null;
done;

for child in $(list_child_processes 60328);
do
  echo killing $child;
  kill -s KILL $child;
done;
rm /Users/maximiliankriegl/Desktop/FH Stuff/ITP/Companion/bin/Debug/net6.0/1518467e386847bfb4736b4ee22859ed.sh;
